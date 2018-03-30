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
