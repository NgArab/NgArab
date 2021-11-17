import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test-info',
  templateUrl: './test-info.component.html',
  styleUrls: ['./test-info.component.scss'],
})
export class TestInfoComponent implements OnInit {
  level: any;
  constructor(private _route: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.level) {
        this.level = params.level;
      } else {
        this._route.navigate(['/home'])
      }
      
       
    });
  }
  goToQuestion() {
    this._route.navigate(['/question'],{ queryParams: {level: this.level}});
  }
}
