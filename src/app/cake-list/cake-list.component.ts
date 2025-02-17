import { Component, OnInit } from '@angular/core';
import { CakeService } from '../services/cake.service';
import { CakeOrder } from '../models/cakeorder';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit{

  constructor(private cakeService:CakeService){}

  cakes:Array<CakeOrder>= [];
  
  ngOnInit():void{
    this.cakeService.getAllCakes().subscribe({
      next:data => {
        this.cakes = data;
      },
      error:err => {
        alert(err);
      }
    });
  }

  searchCake($event:any){
    this.cakeService.getAllCakes().subscribe({
      next:data => {
        if($event.trim()!==''){
          this.cakes = data.filter((cak) => 
            cak.name?.toLowerCase().includes($event.toLowerCase())
          ); 
        }else{
          this.cakes = data;
        }
      },
      error:err => {
        alert(err);
      }
    });
  }
 
  filterCake($event:any){
    this.cakeService.getAllCakes().subscribe({
      next:data => {
        if($event.trim()!==''){
          this.cakes = data.filter((cak) => 
            cak.category?.toLowerCase().includes($event.toLowerCase())
          ); 
        }else{
          this.cakes = data;
        }
      },
      error:err => {
        alert(err);
      }
    });
  }
  
}
