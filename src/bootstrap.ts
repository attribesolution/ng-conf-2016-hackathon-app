import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import{Header} from './header'
import{Body} from './body'
// import{Footer} from './footer'
import {ROUTER_PROVIDERS} from 'angular2/router';   //for Routing
import {RouteConfig, RouterOutlet} from 'angular2/router';         //routeConfig for define routes and router_directive for links
import {CountryComponent} from './country/country';


@Component({
  selector: 'app',
  template: `
      <header></header> 
      <router-outlet></router-outlet>
      <footer></footer>
  `,
  directives:[Header,RouterOutlet]
})
@RouteConfig([{
    path: '/home',
   name: 'Home',
   component: Body,
   useAsDefault:true
},{
    path: '/country',
    name:'Country',
    component: CountryComponent
}])
export class App {} 

bootstrap(App,[ROUTER_PROVIDERS])

  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
