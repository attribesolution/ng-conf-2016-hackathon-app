import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'footer',
  template: `
    <a class="btn btn-success" [routerLink]="['/Countries']">Heroes</a>
    `,
  directives: [RouterLink]
})


export class Footer {}