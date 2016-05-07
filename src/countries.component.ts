import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {CountriesService} from './countries.service'
import {ROUTER_DIRECTIVES, RouterLink} from 'angular2/router';

// import { CountryService } from './countries.service';

@Component({
  selector: 'countries',
  template: `<div class="aligncenter"><ul>
  	<table border=2>
  		<thead>
  			<tr>
  				<th>Name</th>
  				<th>Country Code</th>
  			</tr>
		    <tr  [routerLink]="['/Country', { id: country.countryCode }]" *ngFor="let country of countries" >
  				<th>  {{country.countryName}}</th>
  				<th>{{country.countryCode}}</th>
		    </tr>
  		</thead>
  	</table>

  </ul>
  </div>
  `,
 providers: [RouterLink, HTTP_PROVIDERS, CountriesService],
 directives: [ROUTER_DIRECTIVES],
	styles: [`
			.aligncenter {
				margin-left:35%;
			}
			table {
			}
			`]
})

export class CountriesComponent {

public countries_error:Boolean = false;
public countries:Object = []; 


  constructor(private _countryService: CountriesService) { }

	ngOnInit() {
		this.getCountries();
	}

 
  getCountries() {
    this._countryService.getCountries().subscribe(
      data => { 
      	this.countries = data.geonames;
      },
      err => { this.countries_error = true }
    );
  }


}

