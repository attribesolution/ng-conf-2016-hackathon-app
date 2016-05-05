import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {myHeader} from './myheader';
import {Introduction} from './introduction';
import {myFooter} from './myfooter';

@Component({
  selector: 'my-app',
  
  template: `
    <my-header> </my-header>
    <my-intro> </my-intro>
    <my-footer> </my-footer>
  `,
  
  //styles: [`
  //  .my-app {
  //   text-align: center;
  //  }'
  //`],
  directives: [myHeader, Introduction,myFooter]
  

})

export class App {
    title: string = 'Countries and Capitals';
  //  para: string =
}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
