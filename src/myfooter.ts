import {Component} from 'angular2/core';


@Component({
  selector: 'my-footer',
  
  template: `
<div class="button">  	
<button class="btn1" > Browse Countries </button>
 <\div> `,
styles: [`
    .my-footer {
     text-align: center;
    }
.button{
margin-top:40px;
}
.btn1 {
    background-color: white;
    color: black;
    border: 3px solid #555555;   
    height:20px; 
    max-width:150px;
    margin: -100px -50px; 
    position:relative;
    left:50%;

}
    
  `]
      
})
export class myFooter {
  }


