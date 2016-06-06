import {bootstrap} from 'angular2/platform/browser';
import {App} from './component.app.ts';

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));








