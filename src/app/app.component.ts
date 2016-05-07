import { Component, OnInit, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {AppHeaderComponent} from './app-header/app-header.component';
import {AppFooterComponent} from './app-footer/app-footer.component';
import {MainComponent} from './main/main.component';
import {HomeComponent} from './main/home/home.component';
import {CountriesComponent} from './main/countries/countries.component';
import {CountryComponent} from './main/country/country.component';

@Component({
    moduleId:'appModule',
    selector: 'app',
    templateUrl: 'src/app/app.view.html',
    styleUrls: ['src/app/app.styles.css'],
    directives: [ROUTER_DIRECTIVES,AppHeaderComponent,AppFooterComponent,MainComponent],
    providers: [ROUTER_PROVIDERS],
    encapsulation: ViewEncapsulation.None
})

// defining routes here
@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component:HomeComponent,
    useAsDefault: true
  },
   {
    path: '/countries',
    name: 'Countries',
    component:CountriesComponent
  },
   {
    path: '/country/:code',     // eg localhost:3000/country/US, localhost:3000/country/PK etc
    name: 'Country',
    component:CountryComponent
  }
])


export class AppComponent implements OnInit {
    constructor() { }
    
    ngOnInit() {
        console.log("app initiated");
    }

}