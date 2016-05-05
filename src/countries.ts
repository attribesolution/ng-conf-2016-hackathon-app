import {Component} from 'angular2/core';


@Component({
    selector: 'countries',
    template: `<ul> <li *ngFor="#cunt of countries"> {{cunt}} </li> </ul>`
})
export class Countries {
    countries : Array = ['Pakistan', 'India', "Bangladesh"]
}


