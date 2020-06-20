import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayText: Boolean = false;
  texts = []
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.displayText = true
    this.texts.push(this.texts.length + 1);
  }
  

}
