import { Component, EventEmitter, Output } from '@angular/core';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private cakeService:CakeService){}

  ngOnInit():void{}

  searchText:string = '';

  @Output()
  searchTextChanged:EventEmitter<any> = new EventEmitter<any>();
  
  search(){
    this.searchTextChanged.emit(this.searchText);
  }

}
