import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteConfig, ROUTER_PROVIDERS} from 'angular2/router';
import { provide }              from 'angular2/core';

import { LocationStrategy,
    HashLocationStrategy } from 'angular2/platform/common';
import {Header} from './header';
import {Bech} from './home';
import {Countries} from './countries';
import {Footer} from './footer';

@Component({
  selector: 'app',
  template: `<header></header>
            <router-outlet></router-outlet>
            <footer></footer>`,
  directives : [Header, Bech,Footer, Countries, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/bech', name : 'Bech', component: Bech, useAsDefault : true},
    {path: '/countries',  name : 'Countries',  component: Countries}
])

export class App {}

bootstrap(App, [ROUTER_PROVIDERS,provide(LocationStrategy,
    {useClass: HashLocationStrategy})])
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
