import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text:String = "";
  tel:Number = NaN;

  constructor() { }

  ngOnInit(): void {
  }

  getNumber():string{
    if (this.tel == NaN){
      return '';
    }else{
      return this.tel.toString();
    }
  }

  getText():String{
    return this.text.split(' ').join('%20')
  }

  generateLink():String{
    return(
      `https://wa.me/${this.getNumber()}?text=${this.getText()}`
    )
  }

  copyURL():void{
    navigator.clipboard.writeText(this.generateLink().toString());
  }

}
