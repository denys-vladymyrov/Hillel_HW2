import { Component } from '@angular/core';
import { ProductList } from './product.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private productList: ProductList) {}

  

}
