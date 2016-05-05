import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Header} from  './components/header';
import {Body} from  './components/body';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  selector: 'app',
  template: `
    <header></header>
   <body></body>
    <footer></footer>
  `,
  
  
  directives : [Header,Body,ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: Body
  }
 
])
export class App {}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
