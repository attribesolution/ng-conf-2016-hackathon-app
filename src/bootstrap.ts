import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';   //for Routing

// import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Header} from './header';
import {SideBar} from './sidebar';
import {Countries} from './countries';


@Component({
  selector: 'app',
  templateUrl: './src/app.html',

  directives: [Header, SideBar, Countries] // ROUTER_DIRECTIVES
})

// @RouteConfig([
//   {path: '/countries_capitals',   name: 'Countries',     component: Countries},
//   // {path: '/about', name: 'About', component: AboutComponent},
// ])

export class App {}

bootstrap(App)  // , [ROUTER_PROVIDERS]
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
