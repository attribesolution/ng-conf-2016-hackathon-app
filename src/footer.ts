/**
 * Created by syedmuhammadtaha on 5/6/16.
 */

import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router'


@Component({
    selector: 'my-footer',
    templateUrl: './../views/footer.html',
    styleUrls:['./css/style.css', './css/bootstrap.css'],
    directives: [RouterLink]

})

export class myFooter {}
