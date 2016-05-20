import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouterLink} from 'angular2/router';


@Component({
  selector: 'landing',
  template: `<div class="inner-div">Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum 
  Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum 
  Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum </div>
  <a [routerLink]="['/Countries']">Browse Countries</a>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [RouterLink],
	styles: [`
			.aligncenter {
				text-align:center;
			}
			.inner-div {
			padding:100px;
			}
			a {
				margin-left:600px;
			}
			`]
})

export class LandingComponent {}

