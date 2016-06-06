/**
 * Created by tahir.mehmood on 5/5/2016.
 */
import {Component} from 'angular2/core';


@Component({
    selector: 'app',
    template: `
  	<h1>{{header}}</h1>
  	<div>This is body</div>
  	<footer>{{footer}}</footer>
  `,
})
export class App{
    header="Countries and capital";
    footer="This is footer";
}
