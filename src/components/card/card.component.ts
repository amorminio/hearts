import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Card } from '../../interfaces/general';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { CardValuePipe } from './card-value.pipe';

@Component({
  selector: 'card',
  imports: [CommonModule, MatIconModule, CardValuePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true
})
export class CardComponent {

  @Input() card!: Card;
  @Input() ycard?: boolean = false;
  @Input() xcard?: boolean = true;
  @Input() showCover?: boolean = true;


}
