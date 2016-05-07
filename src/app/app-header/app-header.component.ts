import { Component, OnInit } from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    moduleId: 'appHeaderModule',
    selector: 'app-header',
    templateUrl: 'src/app/app-header/app-header.view.html',
    styleUrls:['src/app/app-header/app-header.styles.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class AppHeaderComponent implements OnInit {
    constructor() { }
    ngOnInit() { }

}