import { Component, OnInit, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {CountriesComponent} from './countries/countries.component';
@Component({
    moduleId:'appModule',
    selector: 'app',
    templateUrl: 'src/app/app.view.html',
    styleUrls: ['src/app/app.styles.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
    encapsulation: ViewEncapsulation.None
})


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
  }
])


export class AppComponent implements OnInit {
    constructor() { }
    
    ngOnInit() { 
        
        console.log("init");
    }

}