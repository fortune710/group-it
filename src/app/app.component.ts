import { Component } from '@angular/core';
import { Object } from './interfaces/Object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-app';
  array: Object[] = [
    {
      title: "Cupcakes",
      description: "The tastiest set of cakes ever"
    }
  ];
}
