import { Component } from '@angular/core';
import { exampleProducts } from '@myorgtest/products';

@Component({
  selector: 'myorgtest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products = exampleProducts;
}
