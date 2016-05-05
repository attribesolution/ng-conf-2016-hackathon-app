
import {Component} from 'angular2/core';

@Component({
    selector: 'header',
    template: `
        <h1>{{title}}<h1>
    `
})
export class Header {
    title: string = 'Countries & Capitals';
}


