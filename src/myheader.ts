import {Component} from 'angular2/core';


@Component({
  selector: 'my-header',
  
  template: `
  	<h1 class='my-header'>{{title}}</h1>
<hr>
  `,
  styles: [`
    .my-header {
     text-align: center;
    }'
  `]
})
export class myHeader {
    title: string = 'Countries and Capitals';
  //  para: string =
}


