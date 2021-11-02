import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test-info',
  templateUrl: './test-info.component.html',
  styleUrls: ['./test-info.component.scss'],
})
export class TestInfoComponent implements OnInit {
  constructor(private _route: Router) {}

  ngOnInit(): void {}
  goToQuestion() {
    this._route.navigateByUrl('/question');
  }
}
