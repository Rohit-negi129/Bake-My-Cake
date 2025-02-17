import { Component, Input } from '@angular/core';
import { CakeOrder } from '../models/cakeorder';

@Component({
  selector: 'app-cake-card',
  templateUrl: './cake-card.component.html',
  styleUrls: ['./cake-card.component.css']
})
export class CakeCardComponent {

  @Input()
  cakee!:CakeOrder

  constructor(){}

  ngOnInit():void{}// ngOnInit is lifecycle hook in Angular.
  //specifically called when the component has been initialized and is about to be displayed on the screen.
  
}
