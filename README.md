# Getting Started: Setup

We are starting this gif guide out with an already begun app. If you need a bit of help in creating your first app, we have [docs that will walk you through that in a snap](https://www.telerik.com/kendo-angular-ui/getting-started/#toc-project-setup)!

￼![http://cl.nicoll.co/qYu9](https://d3vv6lp55qjaqc.cloudfront.net/items/3h472g2j083U2d2F2a3B/Image%202018-03-30%20at%2012.22.37%20PM.png?X-CloudApp-Visitor-Id=23627&v=4f186801)

I went ahead and did some styling and created a header, so to follow along, you should clone down the beginning seed of the project [here](https://github.com/alyssamichelle/KUI-buttons/tree/starter-seed).

### Side Note on Service Workers

I did start our project using the Service Worker and `scss` flag (more on this in a later gif guide):

`ng new KUI-buttons --style=scss --service-worker`

> The --service-worker flag takes care of configuring your app to use service workers by adding the service-worker package along with setting up the necessary files to support service workers. For information on the details, see the following section which covers the process in detail as it shows you how to add a service worker manually to an existing app. — [Angular.io Guide](https://angular.io/guide/service-worker-getting-started)

# Setting View Encapsulation to none for our root component

I also went ahead and set view encapsulation to none on our root component. This is going to allow us to import a styles variable file and all the children components of the root app.component will inherit these styles. Yay cascading styles!

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

 # Creating the Variable style sheet

If you check out the `app.component.sass`, you will see that I imported a variable stylesheet. This is a place for us to store global style variables, like the ones already there:

**app.component.sass**
```css
$kendo-orange: #ff6358
$kendo-white: #f8f8f8
$kendo-light-grey: #ededed
$kendo-black: #4b4e52
```

Now that you have cloned down the starter seed to this gif guide, cd to that project in your terminal and `npm install` all the things. Then, let's run the project using `ng serve`. You should see this at `http://localhost:4200/` in your browser:
￼
![http://cl.nicoll.co/qY5W](https://d3vv6lp55qjaqc.cloudfront.net/items/1d0a1B11421k2u1h3H1E/Image%202018-03-30%20at%203.57.23%20PM.png?X-CloudApp-Visitor-Id=23627&v=b6a2a69c)

---

remove below and link to gif guide once published

---

# Installing the KUI Theme

Now we are going to install the Kendo UI Theme:

![http://cl.nicoll.co/qXvd](http://cl.nicoll.co/qXvd/Screen%20Recording%202018-03-30%20at%2004.46%20PM.gif)

And then we will include the theme in our `styles.scss` file!

```css
@import '~@progress/kendo-theme-default/scss/all'
```

# Generating the t-shirts and stickers components

Now before we start using some Kendo components, let's go ahead and get our navigation working. We'll start by generating the two components we are missing; `T-shirts` and `Stickers`.

`ng g c t-shirts`

`ng g c stickers`

![http://cl.nicoll.co/qYSz](http://cl.nicoll.co/qYSz/Screen%20Recording%202018-03-30%20at%2005.28%20PM.gif)

# Creating Routes for our navigation

## Import the angular router service into the `app.module.ts`

`import { RouterModule, Routes } from '@angular/router';`

![http://cl.nicoll.co/qYSK](http://cl.nicoll.co/qYSK/Screen%20Recording%202018-03-30%20at%2006.08%20PM.gif)


## Create appRoutes const

`const appRoutes: Routes = [];`

![http://cl.nicoll.co/qY1q](http://cl.nicoll.co/qY1q/Screen%20Recording%202018-03-30%20at%2006.10%20PM.gif)

## Configure our routes (with routerModule.forRoot) and add to app's import array

```ts
  RouterModule.forRoot(
    appRoutes
  )
```

![http://cl.nicoll.co/qZEd](http://cl.nicoll.co/qZEd/Screen%20Recording%202018-03-30%20at%2009.19%20PM.gif)



## Route to that comp as default

```ts
const appRoutes: Routes = [
  { path: 'stickers', component: StickersComponent },
  { path: '', redirectTo: '/stickers',
    pathMatch: 'full' }
];
```

The empty path in the second route represents the default path for the application, the place to go when the path in the URL is empty, as it typically is at the start.

![http://cl.nicoll.co/qYAg](http://cl.nicoll.co/qYAg/Screen%20Recording%202018-03-30%20at%2009.09%20PM.gif)

## Creating the other route for our t-shirts component
![http://cl.nicoll.co/qe2z](http://cl.nicoll.co/qe2z/Screen%20Recording%202018-04-03%20at%2003.07%20PM.gif)

Remember to leave the most generic routes, last. Order does matter! So in this case, we are leaving the empty route until the very end, for our "catch all" route.

# Hooking up our navigation in `app.component.html`

At the top, we'll add a `routerLink` with the route for each of the anchors:

```html

  <nav>
    <a routerLink="/t-shirts">T-Shirts</a>
    <a routerLink="/stickers">Stickers</a>
  </nav>
```
Include the router-outlet at the bottom of our `app.component.html`:
`<router-outlet></router-outlet>`

Our routes are working now!!

![http://cl.nicoll.co/qe4i](http://cl.nicoll.co/qe4i/Screen%20Recording%202018-04-03%20at%2004.27%20PM.gif)

However, we don't have active styles applying to the links when each route in turn is selected. I've already added `.active` styles to the `app.component.sass` file. We just need to set a `routerLinkActive` attribute to active. This is going to add a class of `.active` to each anchor when the `routerLink` route is selected.

```html
<a routerLink="/t-shirts" routerLinkActive="active">T-Shirts</a>
<a routerLink="/stickers" routerLinkActive="active">Stickers</a>
```


Now look at the magic happen!

![http://cl.nicoll.co/qdA2](http://cl.nicoll.co/qdA2/Screen%20Recording%202018-04-03%20at%2004.27%20PM.gif)

# Installing KUI Buttons
`npm install --save @progress/kendo-angular-buttons @progress/kendo-angular-l10n`

![http://cl.nicoll.co/qdiu](http://cl.nicoll.co/qdiu/Screen%20Recording%202018-04-03%20at%2002.49%20PM.gif)

# Import Button & Animation Component into `app.module.ts`

Animations are a dependency of our Buttons component. So we'll need to include both!
Once you import them:

```ts
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
```

![http://cl.nicoll.co/qdHi](http://cl.nicoll.co/qdHi/Screen%20Recording%202018-04-03%20at%2002.59%20PM.gif)

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

![http://cl.nicoll.co/qe6n](http://cl.nicoll.co/qe6n/Screen%20Recording%202018-04-03%20at%2003.01%20PM.gif)

Now I went ahead and populated the stickers template:
![http://cl.nicoll.co/qdsG](http://cl.nicoll.co/qdsG/Image%202018-04-03%20at%204.43.52%20PM.png)


# Including the KUI Buttons in our stickers component

# Adding the buttons functionality

We need each of these buttons to add the product to the cart and trigger a cart animation.
