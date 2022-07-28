import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,

    CardModule
  ],
  exports:[
    PlayerComponent
  ]
})
export class PlayerModule { }
