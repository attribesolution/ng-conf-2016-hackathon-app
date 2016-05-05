import { Component, OnInit } from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    moduleId: 'homeModule',
    selector: 'home',
    templateUrl: 'src/app/home/home.view.html',
    styleUrls:['src/app/home/home.styles.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}