import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/shared/services/api.service';
import { ShowService } from 'app/shared/services/show.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  minutes: any = 0;
  seconds: any = 0;
  loading: boolean = true;
  questions:any;
  front_question: any =[];
  index = 0;
  prescenOfQuestion: number = 0;
  flag_error = false;
  loadingBU1 = false;
  Interval: any;
  constructor(public ShowService: ShowService, private apiservices: ApiService,private _route: Router,private route: ActivatedRoute) {
    this.ShowService.show = false;
  }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      if (params.level) {
        this.apiservices
      .getExam({
        question_category_id: 'bf1da3d4-ec6a-4831-8a42-8aad1da497ef',
        level: params.level,
      })
      .subscribe(
        (res) => {
          this.loading = false; 
          
        
          this.questions = res;
          console.log(this.questions);
          
          this.front_question.push(res.questions[0]);
          this.prescenOfQuestion = Math.floor((0/res.questions.length) * 100);
          this.questions.questions.forEach((element:any) => {
            Object.assign(element, { finalAnswer:null});
          });
          this.startTimer(60 * res.exam_time);
        },
        (err) => {
          this.loading = false;
           this._route.navigate(['/home']) 
        }
      );
      } else {
        this._route.navigate(['/home'])
      }
      
       
    });
     
     
  
  
  }
  startTimer(duration: any) {
    let timer: any = duration,
      minutes,
      seconds;
    this.Interval = setInterval(() => {
      minutes = parseInt(`${timer / 60}`, 10);
      seconds = parseInt(`${timer % 60}`, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      this.minutes = minutes;
      this.seconds = seconds;
      if (this.minutes == 0 && this.seconds == 0) {
        clearInterval(this.Interval);
      }

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  choose(item: any) {
    
    
    if (item.finalAnswer != null) {
      if (this.index + 1 == this.questions.questions.length) {
    
        this.index = this.index + 1;
        this.prescenOfQuestion = Math.floor((this.index / this.questions.questions.length) * 100);
     

        let obj :any = {
          exam_id: this.questions.exam.id,
          feedback: 'Good',
          questions:[]
        }
        this.questions.questions.forEach((element:any,index:any) => {
          obj.questions.push({
            question_id: element.id,
            answer_id: element.finalAnswer,
            used_hint: 0,
            skipped:0
          })
        });
        this.loadingBU1 = true;
        this.apiservices.answerExam(obj).subscribe(res => {
          this.loadingBU1 = false;
          clearInterval(this.Interval);
        }, err => {
          this.loadingBU1 = false;
        })
      } else {
        this.front_question=[]
        this.front_question.push(this.questions.questions[this.index + 1]);
        this.index = this.index + 1;
        this.prescenOfQuestion = Math.floor((this.index/this.questions.questions.length) * 100);
      }
      this.flag_error = false;
    } else {
      this.flag_error = true;
    }
  }
  ngOnDestroy(): void {
    this.ShowService.show = true;
  }
}
