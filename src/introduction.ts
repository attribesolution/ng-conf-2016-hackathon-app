import {Component} from 'angular2/core';


@Component({
  selector: 'my-intro',
  
  template: `
  	<h1 class='my-intro'>{{intro}}</h1>
  `,
  styles: [`
    .my-intro {
     
     text-align: center;
     font-family: "Times New Roman";
     font-size: 15px;
     max-width: 500px;
     margin: auto;
     padding-top: 100px;
    }'
  `]
})
export class Introduction {
    intro: string = 'A capital city (or simply capital) is the municipality enjoying primary status in a country, state, '+
    'province, or other region, usually as its seat of government.A capital is typically a city that physically '+
    'encompasses the offices and meeting places of its respective government; the status as capital is often designated by its law or constitution.';
 
}


