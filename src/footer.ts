import { Component } from 'angular2/core';
import {RouterLink} from 'angular2/router'
@Component({
  selector: 'footer',
  directives: [RouterLink],
  template:
    `<p style="text-align: center">
        <button [routerLink]="['/Dashboard']"> Dashboard </button>
        <button [routerLink]="['/Countries']">Browse Countires </button>
     </p>
    `,
})
export class Footer {
    componentName: "Footer"
}