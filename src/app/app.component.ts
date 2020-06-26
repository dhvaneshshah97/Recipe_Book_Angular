import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // our own html component which angular injects it to index.html
  templateUrl: './app.component.html', // contents of this file is injected to our html component in index.html
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
