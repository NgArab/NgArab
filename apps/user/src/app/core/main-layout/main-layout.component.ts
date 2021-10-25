import { Component, OnInit } from '@angular/core';
import { ShowService } from 'app/shared/services/show.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  constructor(public ShowService: ShowService) {}
  ngOnInit(): void {}
}
