import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Paragraph} from './header'
import {Button} from './Button'
import {Listing} from './listing'

@Component({
   directives : [Paragraph, Button,Listing],
  selector: 'app',
  template: `
  	<h1 align="center">Countries and Capitals</h1>
    <hr>
    <myParagraph></myParagraph>
    <myButton></myButton>
    <myListing></myListing>
  ` ,
})
export class App {}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
