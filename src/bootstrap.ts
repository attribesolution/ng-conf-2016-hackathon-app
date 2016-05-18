import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';   //for Routing

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Header} from './header';
import {SideBar} from './sidebar';
import {Countries} from './countries';
import {Footer} from './footer';


@Component({
  selector: 'app',
  templateUrl: './src/app.html',

  directives: [Header, SideBar, Countries, Footer, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

// ################################################
// Router code commented out till the next session

@RouteConfig([
  {path: '/countries',   name: 'Countries', component: Countries}
  // {path: '/home', name: 'Home', component: Body, useAsDefault: true},
])

export class App {}

bootstrap(App)  // , [ROUTER_PROVIDERS]
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
