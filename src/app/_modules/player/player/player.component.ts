import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card/card.component';
import { DeckComponent } from '../../card/deck/deck.component';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() avatar:string = ''
  @Input() name:string = ''
  @Input() points:string = ''
  @Input() hand:Array<CardComponent> = []



  constructor() { }

  ngOnInit(): void {

    if(this.avatar === null || this.avatar === ''){
      this.avatar = 'assets/images/players/040-hacker.png'
    }

    this.hand = [{id: 'a', suit: 'hearts'},
    {id: '2', suit: 'hearts'},
    {id: '3', suit: 'hearts'},
    {id: '4', suit: 'hearts'},
    {id: '5', suit: 'hearts'},
    {id: '6', suit: 'hearts'},
    {id: '7', suit: 'hearts'},
    {id: '8', suit: 'hearts'},
    {id: '9', suit: 'hearts'},
    {id: '10', suit: 'hearts'},
    {id: 'j', suit: 'hearts'},
    {id: 'q', suit: 'hearts'},
    {id: 'k', suit: 'hearts'}]

  }

}
