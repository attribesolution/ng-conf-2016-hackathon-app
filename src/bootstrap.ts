import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import { Dashboard } from './dashboard';

@Component({
  selector: 'app',
  directives: [Dashboard],
  template: `
  	<h1 style="margin-left:40%;">Countries and Capitals</h1>
    <my-dashboard></my-dashboard>
  `,
})
export class App {}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
