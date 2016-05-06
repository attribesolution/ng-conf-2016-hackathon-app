import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router'
import {myHeader} from './header';
import {myFooter} from './footer';
import {myBody} from './body';
import {Countries} from "./countries";



@Component({
    selector: 'app',
    template: `<app-header></app-header>
               <router-outlet></router-outlet>
               <my-footer></my-footer>`,
    directives: [myHeader, myFooter, ROUTER_DIRECTIVES, RouterOutlet],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path:'/home',
        name: 'App',
        component: myBody,
        useAsDefault: true
    },
    {
        path:'/countries',
        name: 'Countries',
        component: Countries,

    }
])

export class App {}

bootstrap(App)
    .then(success => console.log('Kicking off Countries and Capitals from Main'))
    .catch(error => console.log('Your Error Here', error));
