import { Component, OnInit } from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    moduleId: 'countriesModule',
    selector: 'countries',
    templateUrl: 'src/app/countries/countries.view.html',
    styleUrls:['src/app/countries/countries.styles.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class CountriesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}