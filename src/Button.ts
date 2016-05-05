import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
  selector: 'myButton',
  template: `
  <div align= "center">
    	<button  type="button" align="right">Click Me!</button>
        </div>
  `,
  styleUrls:['src/center.css']
})
export class Button {}


