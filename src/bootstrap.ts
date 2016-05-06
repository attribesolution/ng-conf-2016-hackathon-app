import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import { CountriesComponent } from './countries.component';
import { CountryComponent } from './country.component';
import { LandingComponent } from './landing.component';


@RouteConfig([
  {
    path: '/countries',
    name: 'Countries',
    component: CountriesComponent
  },
  {
    path: '/',
    name: 'Landing',
    component: LandingComponent
  },
  {
    path: '/countries/:id',
    name: 'Country',
    component: CountryComponent
  }
])


@Component({
  selector: 'app',
  template: `
  	<h1 class="aligncenter">Countries and Capitals</h1>
      <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
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
