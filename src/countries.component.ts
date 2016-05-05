import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {CountriesComponent} from './countries';

@Component({
  selector: 'countries',
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
export class CountriesComponent {}

bootstrap(CountriesComponent)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
