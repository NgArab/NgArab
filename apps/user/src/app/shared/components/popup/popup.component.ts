import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input() popup_flag: any = false;
  @Output() tragerPopup = new EventEmitter();
  open = false;
  open1 = false;
  nameTest = 'حدد الاختبار';
  arr_test = [
    {
      id: 1,
      name: 'جافا سكربت',
      active: false,
    },
  ];
  nameLevel = 'المستوي';
  arr_level = [
    {
      id: 1,
      name: 'المستوي الاول',
      active: false,
    },
    {
      id: 2,
      name: 'المستوي الثاني',
      active: false,
    },
    {
      id: 3,
      name: 'المستوي الثالث',
      active: false,
    },
  ];
  constructor(private _route: Router) {}

  ngOnInit(): void {}
  closePopup() {
    this.popup_flag = false;
    this.tragerPopup.emit(false);
  }
  goToQuestion() {
    this._route.navigateByUrl('/test-info');
  }
}
