import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popup = false;
  constructor() {}

  ngOnInit(): void {}
  closePopup(value: any) {
    this.popup = value;
  }
}
