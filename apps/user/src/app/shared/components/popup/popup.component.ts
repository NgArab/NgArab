import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/shared/services/api.service';

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
      name: 'JavaScript',
      active: false,
    },
  ];
  nameLevel = 'المستوي';
  arr_level = [
    {
      id: 1,
      name: 'junior',
      active: false,
    },
    {
      id: 2,
      name: 'mid-senior',
      active: false,
    },
    {
      id: 3,
      name: 'senior',
      active: false,
    },

    {
      id: 4,
      name: 'expert',
      active: false,
    },
  ];

  error_message = 'من فضلك اختار المستوي و نوع الاختبار';
  flag_error = false;
  loadingBU1 = false;
  subscribe: any;
  constructor(private _route: Router, private apiservices: ApiService) {}

  ngOnInit(): void {}
  closePopup() {
    this.popup_flag = false;
    this.tragerPopup.emit(false);
  }
  goToQuestion() {
    if (this.nameLevel != 'المستوي' && this.nameTest != 'حدد الاختبار') {
      let findLevel = this.arr_level.find((element: any) => {
        return element.active;
      });
      let textLevel;
      switch (findLevel?.id) {
        case 1:
          textLevel = 'junior';
          break;
        case 2:
          textLevel = 'mid-senior';
          break;
        case 3:
          textLevel = 'senior';
          break;
        case 4:
          textLevel = 'expert';
          break;

        default:
          break;
      }
    /*  this.loadingBU1 = true;
     
      
      this.subscribe = this.apiservices
        .getExam({
          question_category_id: 'bf1da3d4-ec6a-4831-8a42-8aad1da497ef',
          level: textLevel,
        })
        .subscribe(
          (res) => {
            this.loadingBU1 = false;
            this.flag_error = false;

            //this._route.navigate(['/test-info']);
          },
          (err) => {
            this.loadingBU1 = false;
            this.error_message = err.error.message;
            this.flag_error = true;
          }
      ); */
      
      this._route.navigate([`/test-info`],{ queryParams: {level: textLevel}})
    } else {
      this.error_message = 'من فضلك اختار المستوي و نوع الاختبار';
      this.flag_error = true;
    }
 
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
