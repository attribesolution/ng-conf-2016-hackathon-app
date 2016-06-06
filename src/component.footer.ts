/**
 * Created by tahir.mehmood on 5/5/2016.
 */
import {Component} from 'angular2/core';


@Component({
    selector: 'app-footer',
    template: `
  	<h1>{{footer}}</h1>
  `,
})
export class FooterComponent {
    footer="Links go here";
}
