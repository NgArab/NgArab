import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() {}

  ngOnInit(): void {}
}
