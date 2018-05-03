import { Injectable } from '@angular/core';
import { CartItem } from './cartItem';
import { Product } from './product';

@Injectable()
export class CartService {

  // hard coded data, FOR NOW! MUHAHA
  productList: Product[] = [
    {
      id: 0,
      type: 'sticker',
      name: 'Angular Sticker',
      price: 500
    },
    {
      id: 1,
      type: 'sticker',
      name: 'AngularJS Sticker',
      price: 500
    },
    {
      id: 2,
      type: 'sticker',
      name: 'NativeScript Sticker',
      price: 500
    },
    {
      id: 3,
      type: 'sticker',
      name: 'React Sticker',
      price: 500
    },
    {
      id: 4,
      type: 'sticker',
      name: 'VueJS Sticker',
      price: 500
    }
  ];
  cart: CartItem[] = [];
  constructor() {}

  addToCart(productId): void {
    let item = this.productList.find( (product)=>{
      return product.id == productId;
    });

    let cartItem: CartItem = {
      product: item,
      quantity: 1
    };

    for (let thingInCart of this.cart) {
      if (thingInCart.product.id == item.id) {
        thingInCart.quantity++;
        console.log('CART:', this.cart);
        return;
      }
    };

    this.cart.push(cartItem);
    console.log('CART:', this.cart);
  }

  // Could use Observables if we wanted
  // getCart(): Observable<CartItem[]> {
  //   return of(this.cart);
  // }
  //
  // getProducts(): Observable<Product[]> {
  //   return of(this.productList);
  // }

  getCart(): CartItem[] {
    return this.cart;
  }

  getProducts(): Product[] {
    return this.productList;
  }

}
