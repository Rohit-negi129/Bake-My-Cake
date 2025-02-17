import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CakeService } from '../services/cake.service';
import { CakeOrder } from '../models/cakeorder';
import { Customer } from '../models/customer';
import { CakeRequestsService } from '../services/cake-requests.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouteService } from '../services/route.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cake-cart',
  templateUrl: './cake-cart.component.html',
  styleUrls: ['./cake-cart.component.css']
})

export class CakeCartComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private cakeService: CakeService,
    private cakeRequestsService: CakeRequestsService,
    private snackBar: MatSnackBar,
    private routeService: RouteService,
    private fb: FormBuilder
  ) { }

  cake?: CakeOrder;
  stars: Array<number> = [];
  submitStatus: boolean = false;
  customer: Customer = {};
  minDate = new Date();

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get("id") ?? "";
      this.cakeService.getCake(id).subscribe(data => {
        this.cake = data;
        this.stars = new Array(this.cake.rating);
        this.submitStatus = false;
      });
    });
  }

  onSubmit() {
    this.customer.cakeName = this.cake?.name;
    this.customer.price = this.cake?.price;
    const prc: any = this.cake?.price;
    const qty: any = this.customer?.quantity;
    this.customer.total = qty * prc;
    const ddt: any = this.customer?.deliveryDate?.toLocaleDateString('en-US');
    this.customer.deliveryDate = ddt;
    this.cakeRequestsService.saveCakeOrder(this.customer).subscribe({
      next: data => {
        this.snackBar.open("Request submitted", "success", {
          duration: 5000
        });
        this.submitStatus = true;
        this.routeService.navigateToHomeView();
      },
      error: err => {
        alert(err);
      }
    });
  }

  canDeactivate() {
    if (!this.submitStatus) {
      this.submitStatus = confirm("Your cake order will not be placed if not submitted. Are you sure you want to leave this page?");
    }
    return this.submitStatus;
  }

  cakeForm = this.fb.group({
    name: ['', [Validators.required,Validators.pattern(/^[A-Za-z\s]+$/)]],
    phone: ['', [Validators.required]],
    quantity: [0, [Validators.required ]],
    deliveryDate: ['', [Validators.required]],
    message: [''],
    address: ['',[Validators.required]]
    // houseno: ['',[Validators.required]]
  });

  get name() { return this.cakeForm.get("name"); }

  get phone() { return this.cakeForm.get("phone"); }

  get quantity() { return this.cakeForm.get("quantity"); }

  get deliveryDate() { return this.cakeForm.get("deliveryDate"); }

}
