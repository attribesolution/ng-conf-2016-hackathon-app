import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import{Header} from './header'
import{Body} from './body'
import{Footer} from './footer'


@Component({
  selector: 'app',
  template: `
      <header></header> 
      <body></body>
      <footer></footer>
  `,
  directives:[Header,Body,Footer]
})
export class App {}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
