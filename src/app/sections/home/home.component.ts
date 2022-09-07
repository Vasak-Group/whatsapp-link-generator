import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text: string = "";
  tel: number = NaN;
  area: number = NaN;

  constructor() { }

  ngOnInit(): void {
  }

  getNumber(): string {
    if (isNaN(this.tel)) {
      return '';
    } else {
      return this.tel.toString();
    }
  }

  getArea(): string {
    if (isNaN(this.area)) {
      return '';
    } else {
      return this.area.toString();
    }
  }

  getText(): string {
    return this.text.split(' ').join('%20')
  }

  generateLink(): string {
    return (
      `https://wa.me/${this.getArea()}${this.getNumber()}?text=${this.getText()}`
    )
  }

  copyURL(): void {
    navigator.clipboard.writeText(this.generateLink().toString());
  }

}
