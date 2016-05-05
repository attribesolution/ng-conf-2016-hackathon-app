import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'footer',
    template: `
  	<div style="text-align: center"><button [routerLink]="['Countries']">See Details</button></div>
  `,
    directives : [ROUTER_DIRECTIVES]
})
export class Footer {

}


