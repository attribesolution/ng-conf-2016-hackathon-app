import { Component, OnInit } from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {CountriesService} from '../../countries.service';
import {SpinnerComponent} from '../../../shared/spinner/spinner.component';
import { HTTP_PROVIDERS } from 'angular2/http';
@Component({
    moduleId: 'countriesModule',
    selector: 'countries',
    templateUrl: 'src/app/main/countries/countries.view.html',
    styleUrls:['src/app/main/countries/countries.styles.css'],
    directives: [ROUTER_DIRECTIVES,SpinnerComponent],
    providers: [CountriesService,HTTP_PROVIDERS]
})
export class CountriesComponent implements OnInit {
    private countries = [];
    private isRequesting: boolean = true;
    constructor(private countriesService: CountriesService, private router:Router) {
        //injected countriesService to use it later
    }
    ngOnInit() { 
        this.countriesService.getCountries()
            .subscribe(countries => {
                this.countries = countries;
                this.isRequesting = false;      //hide loader
            });
    }
    
    onCountryClick(country){
        console.log(country);
        this.router.navigate(['Country', {code:country.countryCode}]);  //navigate to the desired router
    }

}