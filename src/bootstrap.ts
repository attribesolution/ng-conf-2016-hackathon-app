import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {AppComponent} from './app/app.component';

bootstrap(AppComponent)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
