import { Component } from '@angular/core';
import { CardComponent } from './_modules/card/card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hearts';

  card:CardComponent | undefined

}
