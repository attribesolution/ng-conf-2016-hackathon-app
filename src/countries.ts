/**
 * Created by syedmuhammadtaha on 5/6/16.
 */

import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router'

@Component({
    selector: 'Countries',
    templateUrl: './views/countries.html',
    styleUrls: ['./css/bootstrap.css'],
    directives: [RouterLink]

})

export class Countries{}

