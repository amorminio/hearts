import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeartsService } from 'src/app/_services/hearts.service';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CardModule

  ],
  exports:[
    TableComponent
  ],
  providers:[
    HeartsService
  ]
})
export class GameModule { }
