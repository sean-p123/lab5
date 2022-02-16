import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  count:number =0;
  hideLabel:boolean= true;

  onButtonClick(){
    this.count++;
    
  }
  onStarClick(){
    if(this.hideLabel){
      this.hideLabel=false;
    }else{
      this.hideLabel=true;
    }
   

  }
}


