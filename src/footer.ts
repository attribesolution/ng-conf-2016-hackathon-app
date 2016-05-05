import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';


@Component({
    selector: 'footer',
    template: `
  	<button (click)="goToDetails()">See Details</button>
  `,
})
export class Footer {
    goToDetails(){
        console.log('hello');
    }
}


