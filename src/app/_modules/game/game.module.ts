import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { CardModule } from '../card/card.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlayerModule } from '../player/player.module';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CardModule,
    PlayerModule
  ],
  exports:[
    TableComponent
  ]
})
export class GameModule { }
