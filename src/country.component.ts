import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {CountryService} from './country.service'
import {ROUTER_DIRECTIVES, RouterLink, ROUTER_PROVIDERS, RouteConfig, RouteParams} from 'angular2/router';

@Component({
  selector: 'country',
  template: `<div *ngFor="let country of countries" >
            <h1>{{country.countryName}}</h1>
            <table>
              <tr><td>Goname ID</td><td>{{country.geonameId}}</td></tr>
              <tr><td>Population of country</td><td>{{country.population}}</td></tr>
              <tr><td>Area</td><td>{{country.areaInSqKm}}</td></tr>
              <tr><td>Country Code</td><td>{{country.countryCode}}</td></tr>
              <tr><td>Capital</td><td>{{country.capital}}</td></tr>
              <tr><td>Population of capital</td><td></td></tr>
              <tr><td>3 neighbours</td><td><span *ngFor="let neighbour of neighbours" > {{neighbour.countryName}} </span></td></tr>
              <tr><td>Image 1</td><td><img id='myImage' src="http://www.geonames.org/flags/x/{{country.countryCode}}.gif" /></td></tr>
            </table>
        </div>
  `,
 providers: [RouterLink, HTTP_PROVIDERS, CountryService],
 directives: [ROUTER_DIRECTIVES],
  styles: [`
      .aligncenter {
        margin-left:35%;
      }
      table {
      }
      img
      {
        width:50%;
        height:50%;
      }
      `]
})

export class CountryComponent {

  public country_error:Boolean = false;
  public geoNameId:String = '';
  public countries:Object = [];
  public neighbours:Object = [];
  
  constructor(private _countryService: CountryService, params: RouteParams ) {
    _countryService.country = params.get('id');
  }

  ngOnInit() {
    this.getCountry();
  }

 
  getCountry() 
  {

    this._countryService.getCountry().subscribe(
      data => { 
        this.countries = data.geonames;
        this.countries[0].countryCode = this.countries[0].countryCode.toLowerCase();
        // this.geoNameId = this.countries[0].geonameId;

    



        this._countryService.getNeighbours(this.countries[0].geonameId).subscribe(
          data => {
            this.neighbours = data.geonames;
            // this.neighbours[0].countryCode = this.countries[0].countryCode.toLowerCase();

          },
          err => { this.country_error = true }
        );






      },
      err => { this.country_error = true }
    );

  }

  // getNeighbours() 
  // {console.log(this.geoNameId)
  //   this._countryService.getNeighbours(this.geoNameId).subscribe(
  //     data => {
  //       this.neighbours = data.geonames;
  //       // this.neighbours[0].countryCode = this.countries[0].countryCode.toLowerCase();

  //     },
  //     err => { this.country_error = true }
  //   );

  // }



}

