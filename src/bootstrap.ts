import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouteConfig, RouterLink, RouterOutlet} from 'angular2/router'
import {appHeader} from './header';
import {myFooter} from './footer';



@Component({
  selector: 'app',
  templateUrl: './../views/main.html',
  directives: [appHeader, myFooter],
})

export class App {}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals from Main'))
  .catch(error => console.log(error));