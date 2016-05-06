import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from 'angular2/router'
import { Dashboard } from './dashboard';
import {Header} from './header';
import {Footer} from './footer';
import {Countries} from './countries';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES,Header,Footer],
  providers: [ROUTER_PROVIDERS],
  template: `
    <header></header>
    <router-outlet></router-outlet>
    <footer></footer>
  `,
})
@RouteConfig([
{
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard,
  useAsDefault: true
},{
  path: '/countries',
  name: 'Countries',
  component: Countries
}
])
export class App {}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
