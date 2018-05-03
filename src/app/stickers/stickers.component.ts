import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.sass']
})
export class StickersComponent implements OnInit {

  products: Product[];
  constructor(private cartService: CartService) {}

  addToCart(productId): void {
    this.cartService.addToCart(productId);
  }

  ngOnInit() {}

}
