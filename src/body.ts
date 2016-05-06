/**
 * Created by syedmuhammadtaha on 5/6/16.
 */


import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router'


@Component({
    selector: 'my-body',
    templateUrl: './../views/body.html',
    styleUrls:['./css/style.css', './css/bootstrap.css'],
    directives:[RouterLink],
})

export class myBody {}
