import { Component, OnInit } from '@angular/core';
import { DeckComponent } from '../../card/deck/deck.component';

@Component({
  selector: 'the-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  //array de players
  //array de decks ?

  constructor() { }

  ngOnInit(): void {
  }

}
