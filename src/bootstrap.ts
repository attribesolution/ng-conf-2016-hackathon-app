import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {myHeader} from './myheader';
import {Introduction} from './introduction';
import {myFooter} from './myfooter';
import {Countries} from './countries';


@Component({
  selector: 'my-app',
  
  template: `
    <my-header> </my-header>
    <router-outlet></router-outlet>
    <my-footer> </my-footer>
`,
  
  directives: [myHeader, Introduction, myFooter, Countries, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]

})

@RouteConfig([
  
        {
        path: '/Intro',
        name: 'Intro',
        component: Introduction,
        useAsDefault: true
        },
        {
            path: '/countries',
            name: 'Countries',
            component: Countries

        }

])

export class App {
    title: string = 'Countries and Capitals';
  //  para: string =
}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
