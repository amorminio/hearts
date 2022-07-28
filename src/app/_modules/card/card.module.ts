import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckComponent } from './deck/deck.component';
import { CardComponent } from './card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    DeckComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports:[
    CardComponent,
    DeckComponent
  ]
})
export class CardModule { }
