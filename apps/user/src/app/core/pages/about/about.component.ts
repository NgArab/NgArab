import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  screenWidth: number = 0;
  sliderArr: Array<any> = [
    {
      img: '1.jpg',
      name: 'عمر حسن',
      job: '🖲️ المؤسس و لعيب فرونت',
      desc: 'أى حاجه فى أى حاجه فى أى حاجه',
    },
    {
      img: '2.jpg',
      name: 'عبدالرحمن شرويدة',
      job: '🖲️ مؤسس مشارك و لعيب فرونت',
      desc: 'أى حاجه فى أى حاجه فى أى حاجه',
    },
    {
      img: '3.jpg',
      name: 'عمرو محمد',
      job: '🖲️ لعيب باك اند',
      desc: 'أى حاجه فى أى حاجه فى أى حاجه',
    },
    {
      img: '4.jpg',
      name: 'ابراهيم رياض',
      job: '🖲️ جرافيك ديزاينر و لعيب ألوان',
      desc: 'أى حاجه فى أى حاجه فى أى حاجه',
    },
    {
      img: '5.jpg',
      name: 'أحمد عيسى',
      job: '🖲️ لعيب فرونت اند ',
      desc: 'أى حاجه فى أى حاجه فى أى حاجه',
    },
    {
      img: '6.jpg',
      name: 'هبة الديب',
      job: '🖲️ لعيب باك اند ',
      desc: 'أى حاجه فى أى حاجه فى أى حاجه',
    },
    {
      img: '7.jpg',
      name: 'يحيى فودة',
      job: '🖲️ لعيب باك اند ',
      desc: 'أى حاجه فى أى حاجه فى أى حاجه',
    },
  ];

  constructor() {
    this.detectScreenWidth(window.innerWidth);
  }

  ngOnInit(): void {
    this.animateSlider();
  }
  // animate slider
  animateSlider() {
    let removedSliderItem: any;
    setInterval(() => {
      removedSliderItem = this.sliderArr[0];
      this.sliderArr.shift();
      this.sliderArr.push(removedSliderItem);
    }, 5000);
  }
  // detect screen width
  detectScreenWidth(event: any) {
    if (event.target) this.screenWidth = event.target.outerWidth;
    else this.screenWidth = event;
  }
}
