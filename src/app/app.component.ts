import { CartService } from './cart.service';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Kendo UI Store';
  public cart;
  constructor() {
    let cartService = new CartService;
    this.cart = cartService.getCart();
    console.log('app comp cart: ', this.cart);
  }
}
