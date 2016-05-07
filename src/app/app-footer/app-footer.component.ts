import { Component, OnInit } from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
@Component({
    moduleId: 'appFooterModule',
    selector: 'app-footer',
    templateUrl: 'src/app/app-footer/app-footer.view.html',
    styleUrls:['src/app/app-footer/app-footer.styles.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class AppFooterComponent implements OnInit {
    constructor(public router: Router) {
        
    }
    ngOnInit() { }
    
    
    // this function returns whether the current route is the route passed in the function
    isActive(route: any[]): boolean {
        return this.router.isRouteActive(this.router.generate(route));
    }

}