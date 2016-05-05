import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Header} from './header';
import {Bech} from './home';
import {Footer} from './footer';

@Component({
  selector: 'app',
  template: '<header></header>' +
            '<bech></bech>' +
            '<footer></footer>',
  directives : [Header, Bech,Footer]
})
export class App {}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
