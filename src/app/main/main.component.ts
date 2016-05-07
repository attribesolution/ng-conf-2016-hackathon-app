import { Component, OnInit } from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    moduleId: 'mainModule',
    selector: 'main',
    templateUrl: 'src/app/main/main.view.html',
    styleUrls:['src/app/main/main.styles.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class MainComponent implements OnInit {
    constructor() { }
    ngOnInit() { }

}