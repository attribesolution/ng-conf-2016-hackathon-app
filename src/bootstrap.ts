import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import { CountriesComponent } from './countries.component';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';



// @RouteConfig([
//   {
//     path: '/countries',
//     name: 'countries',
//     component: CountriesComponent
//   }
// ])


@Component({
  selector: 'app',
  template: `
  	<h1 class="aligncenter">Countries and Capitals</h1>
  	<hr>
  	<div>
  		<div class="inner-div">
  		lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum 
      <br><br><br>
      <a href="" class="aligncenter">Browse Countries</a>

  		</div>
      <br>
  	</div>
  `,
	styles: [`
			.aligncenter {
				text-align:center;
			}
			.inner-div {
			padding:100px;
			}
			`]
})
export class App {}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
