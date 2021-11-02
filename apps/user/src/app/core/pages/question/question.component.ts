import { Component, OnInit } from '@angular/core';
import { ShowService } from 'app/shared/services/show.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  minutes: any = 0;
  seconds: any = 0;
  constructor(public ShowService: ShowService) {
    this.ShowService.show = false;
  }

  ngOnInit(): void {
    this.startTimer(60 * 1);
  }
  startTimer(duration: any) {
    let timer: any = duration,
      minutes,
      seconds;
    let myVar = setInterval(() => {
      minutes = parseInt(`${timer / 60}`, 10);
      seconds = parseInt(`${timer % 60}`, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      this.minutes = minutes;
      this.seconds = seconds;
      if (this.minutes == 0 && this.seconds == 0) {
        clearInterval(myVar);
      }

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }
  ngOnDestroy(): void {
    this.ShowService.show = true;
  }
}
