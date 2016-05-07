import { Component, OnInit, Pipe, PipeTransform } from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {CountriesService} from '../../countries.service';
import {SpinnerComponent} from '../../../shared/spinner/spinner.component';
import { HTTP_PROVIDERS } from 'angular2/http';

// We use the @Pipe decorator to register the name of the pipe
@Pipe({
  name: 'customLimit'
})
// The work of the pipe is handled in the tranform method with our pipe's class
class CustomLimitPipe implements PipeTransform {
  transform(array: Array<any>, args: any[]) {
    array = array.slice(0,3);
    return array;
  }
}



@Component({
    moduleId: 'countryModule',
    selector: 'country',
    templateUrl: 'src/app/main/country/country.view.html',
    styleUrls:['src/app/main/country/country.styles.css'],
    directives: [ROUTER_DIRECTIVES,SpinnerComponent],
    providers: [CountriesService,HTTP_PROVIDERS],
    pipes:[CustomLimitPipe]
})
export class CountryComponent implements OnInit {
    private country = {};
    private neighbours = [];
    private isRequesting: boolean = true;
    constructor(countriesService: CountriesService,params: RouteParams) {
        console.log(params);
        console.log(params.get("code"));
        // get country based on the country code (code) we have
        countriesService.getCountry(params.get("code"))
            .subscribe(country => {
                this.country = country;
                // get country neighbours
                countriesService.getNeighbours(params.get("code"))
                    .subscribe(neighbours => {
                        this.neighbours = neighbours;
                        this.isRequesting = false;      //hide the loader
                    });
            });
    }
    ngOnInit() { }
}