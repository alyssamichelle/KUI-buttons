This GIF guide demonstrates the steps necessary to integrate [Kendo UI for Angular](https://www.telerik.com/kendo-angular-ui/) into a web app. This is going to be a demo store app that we are building and each new gif guide will walk you through a different Kendo UI Component. This particular guide walks you through the process of using the [Button](https://www.telerik.com/kendo-angular-ui/components/buttons/button/) component as well as setting up a store app and adding products to a "cart". Let's dive in!

## Getting Started: Setup

We are starting this gif guide out with an already begun app. If you need a bit of help in creating your first app, we have a [Getting Started Guide](https://www.telerik.com/kendo-angular-ui/getting-started/#toc-project-setup)! It outlines the steps necessary for setting up your machine to use Kendo UI for Angular. It also provides step-by-step instructions on how to build your first app.

￼![https://cl.nicoll.co/qYu9](https://cl.nicoll.co/qYu9)

I went ahead and did some styling and created a header, so to follow along, you should clone down the beginning seed of the project [here](https://github.com/alyssamichelle/KUI-buttons/tree/starter-seed).

### Side Note on Service Workers

I did start our project using the Service Worker and `scss` flag (more on this in a later gif guide):

```console
ng new KUI-buttons --style=scss --service-worker
```

> The --service-worker flag takes care of configuring your app to use service workers by adding the service-worker package along with setting up the necessary files to support service workers. For information on the details, see the following section which covers the process in detail as it shows you how to add a service worker manually to an existing app. — [Angular.io Guide](https://angular.io/guide/service-worker-getting-started)

## Setting View Encapsulation to none for our root component

I also went ahead and set view encapsulation to none on our root component. This is going to allow us to import a styles variable file and all the children components of the root `app.component` will inherit these styles. Yay cascading styles!

**app.component.ts**
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
}
```

 ## Creating the Variable stylesheet

If you check out the `app.component.sass`, you will see that I created and imported a variable stylesheet. This is a place for us to store global style variables, like the ones already there:

**app.component.sass**
```sass
$kendo-orange: #ff6358
$kendo-white: #f8f8f8
$kendo-light-grey: #ededed
$kendo-black: #4b4e52
```

Now that you have cloned down the starter seed to this gif guide, cd to that project in your terminal and `npm install` all the things. Then, let's run the project using `ng serve`. You should see this at `http://localhost:4200/` in your browser:
￼
![https://cl.nicoll.co/qY5W](https://cl.nicoll.co/qY5W)

## Installing the KUI Theme

Now we are going to install the Kendo UI Theme:

![https://cl.nicoll.co/qXvd](http://f.cl.ly/items/0h2u2U261Y2a3L0k153n/Screen+Recording+2018-03-30+at+04.46+PM.gif)

And then we will include the theme in our `styles.scss` file!

```scss
@import '~@progress/kendo-theme-default/scss/all'
```

## Generating the t-shirts and stickers components

Now before we start using some Kendo components, let's go ahead and get our navigation working. We'll start by generating the two components we are missing; `T-shirts` and `Stickers`.

```console
ng g c t-shirts
ng g c stickers
```

![https://cl.nicoll.co/qYSz](http://f.cl.ly/items/0v0s3h103y0R3y3d1p2Y/Screen+Recording+2018-03-30+at+05.28+PM.gif)

## Creating Routes for our navigation

### Import the angular router service into the `app.module.ts`

```ts
import { RouterModule, Routes } from '@angular/router';
```

![https://cl.nicoll.co/qYSK](http://f.cl.ly/items/1O1Q3A1c2u262V253l1S/Screen+Recording+2018-03-30+at+06.08+PM.gif)

### Create appRoutes const

```ts
const appRoutes: Routes = [];
```

![https://cl.nicoll.co/qY1q](http://f.cl.ly/items/0t0p3c0V3E0a262n070b/Screen+Recording+2018-03-30+at+06.10+PM.gif)

### Configure our routes

Next, we need to configure our `appRoutes` with `routerModule.forRoot()`. This goes inside our `app.module.ts` imports array:

```ts
  RouterModule.forRoot(
    appRoutes
  )
```

![https://cl.nicoll.co/qZEd](http://f.cl.ly/items/3v0D202F0J3W1h2m183F/Screen+Recording+2018-03-30+at+09.19+PM.gif)

### Route to that comp as default

Now to create a couple of routes! Our `stickers` path needs to point to our `StickersComponent`.

```ts
const appRoutes: Routes = [
  { path: 'stickers', component: StickersComponent },
  { path: '', redirectTo: '/stickers', pathMatch: 'full' }
];
```

The empty path in the second route represents the default path for the application, the place to go when the path in the URL is empty, as it typically is at the start.

![https://cl.nicoll.co/qYAg](http://f.cl.ly/items/2F2X3d0S3H3T081q3R39/Screen+Recording+2018-03-30+at+09.09+PM.gif)

### Create the other route for our t-shirts component

Remember to leave the most generic routes, last. Order does matter! So in this case, we are leaving the empty route until the very end, for our "catch all" route.

![https://cl.nicoll.co/qe2z](http://f.cl.ly/items/221L2U3W331F0f1X2Z2h/Screen+Recording+2018-04-03+at+03.07+PM.gif)

## Add Navigation in `app.component.html`

At the top, we'll add a `routerLink` attribute with the route for each of the anchors:

```html
<nav>
  <a routerLink="/t-shirts">T-Shirts</a>
  <a routerLink="/stickers">Stickers</a>
</nav>
```

Include the router-outlet at the bottom of our `app.component.html`:

```html
<router-outlet></router-outlet>
```

Our routes are working now!

![https://cl.nicoll.co/qe4i](http://f.cl.ly/items/1r2x1S0W0l0A1t3w0h3D/Screen+Recording+2018-04-03+at+04.27+PM.gif)

## Getting the active links to LOOK active

However, we don't have active styles applying to the links when each route in turn is selected. I've already added `.active` styles to the `app.component.sass` file:

```sass
  a, a:focus, a:active
    color: $kendo-black
    text-decoration: none
    margin: 14px
    &:first-child
      margin-left: 0

  a.active
    font-weight: bold
    cursor: default
    color: $kendo-orange
```

We just need to set a `routerLinkActive` attribute to the active anchor. This is going to add a class of `.active` to each anchor when the `routerLink` route is selected.

```html
<a routerLink="/t-shirts" routerLinkActive="active">T-Shirts</a>
<a routerLink="/stickers" routerLinkActive="active">Stickers</a>
```

Watch the magic happen:

![https://cl.nicoll.co/rLhd](http://f.cl.ly/items/04370h2D1N1U2d0y0Z1A/Screen+Recording+2018-05-03+at+12.36+PM.gif)

## Install the Button Component and Dependencies

Let's install the Button component so we can use it in our app. It's contained in the package, `@progress/kendo-angular-buttons`. It has a peer dependency for the Localization package, `@progress/kendo-angular-l10n`, which enables you to translate the components into different languages.

```console
npm install --save @progress/kendo-angular-buttons @progress/kendo-angular-l10n
```

![https://cl.nicoll.co/qdiu](http://f.cl.ly/items/0G0K472I3O0A0v2U0N3A/Screen+Recording+2018-04-03+at+02.49+PM.gif)

## Import Button and Animation Component into `app.module.ts`

Animations are a dependency of our Buttons component. So we'll need to include both!

Once you import them:

```ts
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
```

![https://cl.nicoll.co/qdHi](http://f.cl.ly/items/3u3e1R2w2O3t0R3R3K0B/Screen+Recording+2018-04-03+at+02.59+PM.gif)

Be sure to add them to the imports array as well:

```ts
@NgModule({
  declarations: [
    AppComponent,
    TShirtsComponent,
    StickersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    ...
  ],
```

![https://cl.nicoll.co/qe6n](http://f.cl.ly/items/3s2o0A0B0A1Z3i0A2F0d/Screen+Recording+2018-04-03+at+03.01+PM.gif)

I went ahead and populated the stickers template for us:
![https://cl.nicoll.co/qdsG](http://f.cl.ly/items/112k3s2L2I2D290P0R0q/Image+2018-04-03+at+4.43.52+PM.png)


## Including the KUI Buttons in our stickers component

Now we are going to go ahead and add our buttons into the stickers componet. So each sticker for sale will have a button to add that sticker to the cart!

```html
<section>
  <div class="product">
    <div class="product image">
      <img src="assets/images/stickers/angular_sticker.jpeg" />
    </div>
    <button kendoButton (click)="onButtonClick()" [primary]="true">Angular Sticker $5</button>
  </div>

  <div class="product">
    <div class="product image">
      <img src="assets/images/stickers/angularjs_sticker.jpeg" />
    </div>
    <button kendoButton (click)="onButtonClick()" [primary]="true">AngularJS Sticker $5</button>
  </div>

  <div class="product">
    <div class="product image">
      <img src="assets/images/stickers/nativescript_sticker.jpeg" />
    </div>
    <button kendoButton (click)="onButtonClick()" [primary]="true">NativeScript Sticker $5</button>
  </div>

  <div class="product">
    <div class="product image">
      <img src="assets/images/stickers/react_sticker.jpeg" />
    </div>
    <button kendoButton (click)="onButtonClick()" [primary]="true">React Sticker $5</button>
  </div>

  <div class="product">
    <div class="product image">
      <img src="assets/images/stickers/vuejs_sticker.jpeg" />
    </div>
    <button kendoButton (click)="onButtonClick()" [primary]="true">VueJS Sticker $5</button>
  </div>

</section>
```

## Adding the buttons functionality

We need each of these buttons to add their product to the cart. The rest of our game plan will look something like this:
- Generate Cart service
- Import & Include Cart Service inside `app.module.ts` provider array
- Create Product Class
- Create CartItem Class

### Generate Cart Service
We are going to need a cart service to give us access to our cart to add/remove items.To generate our cart service, I used the CLI command:

```console
ng g s cart
```

### Import & Include Cart Service inside `app.module.ts` provider array
```ts
import { CartService } from './cart.service';

...

providers: [
  CartService
],
```

## Creating Classes for `product` and `cartItem`
In order to add thing to our cart, we need to create a couple of classes, `cartItem`s that will consist of `product`s.

### Create Product Class:
We would like our products to consist of an id, type, name and price (in cents).

**./product.ts**
```ts
export class Product {
  id: number;
  type: string;
  name: string;
  price: number;
}
```

### Create Cart Item Class:

We want all of our cart items to have not only the product info (from above) but also the quantity and the size if applicable.

**./cartItem.ts**
```ts
import { Product } from './product';

export class CartItem {
  product: Product;
  quantity: number;
  size?: string | null;
}
```


## Populating our Cart Service

Now, inside our cart service, we will import the cartItem and product classes.

**cart.service.ts**

```ts
import { Injectable } from '@angular/core';
import { CartItem } from './cartItem';
import { Product } from './product';


@Injectable()
```

Then we'll create a hard coded productList for now, with all the stickers.

```ts
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
```

Next we need to create a cart that is an array of cartItems.

```ts
  cart: CartItem[] = [];
  constructor() {}
```

Now for the fun part! We need three functions, one to return the products in the cart (`getCart()`), one to return all the available products (`getProducts()`) and one to add items into our cart for shopping fun (`addToCart`)! Here we could import and use `Observable` and `of` from RXJS, but for now I chose to keep it simple:

```ts
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
```

Our `addToCart()` method needs to be a bit more complex, so let's break it down.

We could do something like this:
```ts
  addToCart(productId): void {
    let item = this.productList.find( (product)=>{
      return product.id == productId;
    });

    let cartItem: CartItem = {
      product: item,
      quantity: 1
    };

    this.cart.push(cartItem);
    console.log('CART:', this.cart);
  }
```
In this implementation, we take the `productId` passed in and set `item` to the product with a matching id. Then we take that item and put it into a `cartItem` with a default quantity of 1. Then simply push the `cartItem` into the cart. This works of course, but isn't super flexible. If the shopper chooses to buy two of the same sticker, this way would push that same sticker into the cart twice instead of simply updating the quantity of the first sticker. What we'd rather have happen is first check if that product exists in the cart, if it does update the quantity, else push the new product into the cart.

```ts
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
```
Now that all this cool cart functionality has been created, we can go into our stickers component and use it! For a quick test, let's connect each of the buttons (again, hard coded, I know) and call an `addToCart()` method that we need to create in the stickers component. We'll pass in a product id for each product.

`<button kendoButton (click)="addToCart(0)" [primary]="true">Angular Sticker $5</button>`

So each of our buttons will have this nifty call on click `(click)="addToCart(0)"`.

![image of stickers.component.html](http://f.cl.ly/items/052N2q1w1Q3X0T2l1k3d/Image+2018-05-01+at+1.57.00+PM.png)

## Finishing the addToCart functionality in the stickers component


Now let's create the `addToCart` functionality inside our `stickers.component.ts` by importing the `CartService`.

**stickers.component.ts**
```ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.sass']
})
```

Then we'll go ahead and inject our `cartService` in the constructor params. We need to do it here, because there are methods on the CartService which we'd like to use.

```ts
export class StickersComponent implements OnInit {

  constructor(private cartService: CartService) {}

  ngOnInit() {}

}
```

### Now we simply need to create an `addToCart` function

This function will pass the productId to the Service and let it handle all the logic.

```ts
export class StickersComponent implements OnInit {

  constructor(private cartService: CartService) {}

  addToCart(productId): void {
    this.cartService.addToCart(productId);
  }

  ngOnInit() {}

}
```

## The Cart is now being populted!!!!

Now when we click the stickers buttons, each sticker is added to the cart!

![https://cl.nicoll.co/rKnV](http://f.cl.ly/items/390g102F393P2x1b1V2w/Screen+Recording+2018-05-03+at+01.52+PM.gif)

And if we selected the same sticker multiple times, we see that it just updates the quantity for that product in the cart!

![https://cl.nicoll.co/rKHD](http://f.cl.ly/items/2s0g1X3b0B1T2k0n0R2K/Screen+Recording+2018-05-03+at+01.53+PM.gif)

![https://cl.nicoll.co/rKEm](http://f.cl.ly/items/0Z033w463l2A2A3y110l/Image+2018-05-03+at+1.54.45+PM.png)

We have much more to do in the way of cleaning up, but for now we will leave that for the next gif guide! We hope you have enjoyed this first one and look forward to publishing more that will build on where we left off. Happy coding!
