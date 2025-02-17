import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent {

  filterText:string = '';

  @Output()
  filterTextChanged:EventEmitter<any> = new EventEmitter<any>();

  filter(){
    this.filterTextChanged.emit(this.filterText);
  }

}
