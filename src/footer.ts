import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';


@Component({
    selector: 'footer',
    template: `
  	<div style="text-align: center"><button (click)="goToDetails()">See Details</button></div>
  `,
})
export class Footer {
    goToDetails(){
        console.log('hello');
    }
}


