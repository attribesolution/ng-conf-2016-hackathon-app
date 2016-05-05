
import {Component} from 'angular2/core';

@Component({
    selector: 'body',
    template: `
        <p>{{desc}}<p>
    `
})
export class Body {
    desc: string = 'Description of Countries';
}


