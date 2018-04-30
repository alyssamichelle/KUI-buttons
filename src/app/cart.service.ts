import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  cart:object = {
    0: {
      type: 'sticker',
      name: 'React Sticker',
      price: 130,
      quantity: 1
    }
  };
  constructor() { }

}
