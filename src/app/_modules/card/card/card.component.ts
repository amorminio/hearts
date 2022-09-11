import { Component, Input, OnInit } from '@angular/core'
import { Card } from 'src/app/_shared/models/card'
import { animations } from '../../../_shared/animations'

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations   : animations,
})
export class CardComponent {

  @Input() card:Card | undefined;
  @Input() hoverAnimation:boolean | undefined;

  cardHover:boolean = false

  constructor(){

  }

  setAnimation(){
	this.cardHover = !this.cardHover
  }

  get cardHoverState__(){
	return this.cardHover && this.hoverAnimation ? 'select' : 'cancel'
  }








}
