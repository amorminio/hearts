import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIconSetInNamespace('phosphor', this.domSanitizer.bypassSecurityTrustResourceUrl('icons/phosphor.svg'));
  }
}
