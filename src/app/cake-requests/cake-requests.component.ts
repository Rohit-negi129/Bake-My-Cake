import { Component, OnInit } from '@angular/core';
import { CakeRequestsService } from '../services/cake-requests.service';
import { Customer } from '../models/customer';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-cake-requests',
  templateUrl: './cake-requests.component.html',
  styleUrls: ['./cake-requests.component.css']
})
export class CakeRequestsComponent implements OnInit {

  constructor(private cakeRequests:CakeRequestsService,
    private auth:AuthService,
    private route:RouteService){}

  customers:Customer[] = [];
  displayedColums:string[] = ['id','name','phone','cakeName','deliveryDate','price','quantity','total'];

  ngOnInit():void{
    this.cakeRequests.getAllCakeRequests().subscribe({
      next:data => {
        this.customers = data;
      },
      error:err => {
        alert(err);
      }
    });
  }

  logout(){
    this.auth.logout();
    if(!this.auth.isLoggedIn){
      this.route.navigateToLoginView();
    }
  }

}
