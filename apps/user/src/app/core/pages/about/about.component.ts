import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  // testArr: Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  testArr: Array<any> = [
    {
      img: 'data:image/png;base64,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',
      name: 'test1',
      job: 'لعيب فرونت اند 🖲️',
      desc: ' أى حاجه فى أى حاجه فى أى حاجه  ',
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imgacademy.com%2Fabout-img-academy&psig=AOvVaw1ZMN2G6MIOqr-hypZ9vFak&ust=1627821041504000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi52oqojfICFQAAAAAdAAAAABAD',
      job: 'لعيب فرونت اند 🖲️',
      desc: ' أى حاجه فى أى حاجه فى أى حاجه  ',
    },
    {
      img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAMAAADudvHOAAAA0lBMVEXf5M01QRM2QhEoMgDj6NE2QhUqNgDj6dDk6dKWn3+0u5siMADg59LH0LLT3L5NVzQxPQwtOQBgaUvc5chMUzI1Pwvk682Bim4gKwC7xKk4RBM2QRcbLAAzPQvh6tDf5siMlXVwelpVXzwvPABBTCRob02yu6OMlnTGzasZJwAUIQCQmngGHQAAFwDJ0rrX3cOstZdaYTyiqYt2fWDL1LJja0W3v5w+RiCZoITr8N45QyCGjnR+g2xdY0vBxrBbY0R5hVmWnnVrcVinrJV8g2JZZDnorD6QAAAIJ0lEQVR4nO2cDXfauBKGLVmWDBhbwmDAXmwgkLDN3kAJCWm7t2x76f//S1eSZex89Wyz2yaYec5JDhGSQO8ZjWfGciwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgV0EYc5mGvPZXeYOQ808XY83F4rW/yxuENX4XggrJu+Zrf5c3CGnQHo+xxG4yi73213lrkIbAMVJIeQjI8wDSsGPkKGzYXI+Rmwsjx1jPa3+ZtwfI811Anu9CLv/4Lec/IM9TuAYVNEPgDAA/B9hbj/CYydcPjtmz1F+qiYSWzjMYS9OUpaziu5lFPBZJZD/vubnVLGqkmi5TY/SHyV/k2SFvDHI1vB1qmkvL5FyhaRkOo8xK09BfjefT7nQybi61A1e9osg/75tWP33K7KQybT1wN2kMfaVjtvxcTPwrl/hPIJfvWnZL8a7p5k3p4o+8afA+kybi9wMquILS6TpkauGM+eOAnnEsWwUNLv3o8cSsfT2zqeyAOT2b3oXSKBf5J9m/zfxfvMyXQi5VWKgy9paMe7QVhJsWRqqld2ORqJHIlB5rEOL2zpf6ZNF6awvZIpNZ+R4X3cVDfUjYtylS08RxjDlqTYeutdClAcxxcDTyyIw9UUEzprfGiXjtlk7h8ajjLd9LqVTKqhqSxMGj7ZVrhdcDqWmiweqVDLnv7y/S3tKejMYx1iOdGJ+Juw/DBKt5Me8uX2OtL+CJpELKg7U+Yr6ZniWOWpCUBuXd+LcwnXMllaMV00LGTrKpxtxsGHPdW74nOymBEjxqbD7mE/Mjsp7n5eHvpzzfHzhv0IZAx3ubxw6K1b4y7dixJxY5GBBrdzkq5Imx1lfpdDHL+/dqIY8jLcDpYSyE4LkQ2mKE9Do95XG4KPRxUEI/H+ZkWccu1JEaUiGoHCENiCaoRvIkDo8TbieTT58mCT3Yj7QDHnO663+6ntFcNbkDxZ/SerT9EHan1cn3oj2b9PvXMzXlwQhrIo9cEPrY8EMZwvgTilTH3CgS3lmETEZEF7bpiXr/Pcy5TFCx6Xh3FYYqdFrL7YbrJY+Dezz57Fp5Lj/lGOWbI+Z8r3uyLLoWZtXa3eoZyJqarSh1uDLBlHu143Gx4+ohj1wzb7rG4apFO8XybkIt2ZJlfkt5X2Uo24Wby5NKIXjuqWabtPggdzPjMaqZPPPUMsZD2gkvjMpeeHkbY5EyCb3s0TA3FNJucWNm9io18sg50ttWvazHQXTlqcu1FugqKFwHvwkPKSW74eZyZA+Jth6yFmYX8mnohcXnEC+84bWSB6NZO9dB6eNL56M7YjEuQ0B3zx+Md6U7yluo7JeWHxWtRVwrefjUL5cX7kyoh+1VmUG4Y3FvvHynw83WVC1hOZ61R716yTMvV2eFHSNPbLcr8lw+GE+W00KegW9V7rsyK0tGtZJHTCqJeFbIg1t+RZ5H46+6hTw0sqplL8KCWsnDe/uKPAfrwYOsNAotT1K1nqtt4cFnkXevKsjmtZIHiefkKVsfWQ9rmysZ4t2oWn6V1jMBeVgbPSOPVTN5sLh4Wp7oO75HWk+xubbR/fuuddtctF8JW/62PDPjmrGd3ZOnbq4Zi35aiXsq8pTjH1+5lgHP60JocLj3ocdbLKlVxq7kqYR1f0ceZVadXl4/Ra0mI6WbCtO2qJs87Mflca+LyplKKipePG3QeiUVPy6PpSsfphw2CipBt+VF34p48YTlIaQ9KOSxV27Z88OqheuVsb/IeixrfmZST6TKYao1yyx3ESf1qve8UJ50TWPtZLDDpxtGLM/zSNQMimrPicsThltTincSPluFmYydl40td1C9SvEvlSe6s40OMv6xg32/P0lo4uR3BE9eHtl1LvRJcnV7dDQSI3Ems3p1gqFIN05bnmzT5U6SHHxNfiOZTwOQR83JoqE58VLoo+5IzzY3HORRx6MstqAU84M80gnZ3UU0rZs8P5pzKfIijz+xS3k4H/zlsyhARyfPFzrqaeymOYGSbQZ5y4j279WaRU93Hf1eqeO4X2wzflCegMpvHJ53RnSkEHYybzJGomle0Ij59FiOP7FG17AtzhaS9sdAtwTdcfUB06+mY7Ct5JmkMr7oq28cEstli/V+F3R3+/UiU3NHpt6D8a6ajL1pGIuySMOK6kx+IldRrWfJVpa/kUX3x0f3xxN9EEr9MPOmEtljpTx8l1rHAzO/vUP5gVkPX6jDlNnTx5HJg/HEPKJBpEKH55vVDcFoazaXmByTPKGpRFj58ljI7pfQDdkz8lhF70Ler1//vPvf+ef2cpnJXFQ9ocqYfGFFaHRw+f/+Ko6Grjij1BZxsOsM08OTCJ61yKuFGNP1KcujDzo56nLeGn9QDYSl0sCifX4EAaPB8JTluTa5FY/5dqkvh6Hcr9F64OTWg4KjuXD9BJiKFFVO4cgIJzhfWq6bhf75pDgIhOj4lI2H+BSpcqE+p8lp0Pk6me9mlOpj4g7HvHrC4wRhe4oP2br0QEI9sZKnXglyMN2f9kOrLJvaMXJKhSo4iUy4yEn/NwoWLab0SXHUifHgNrKqt79ODnmVan+jD80m32lip59tOmV5JCQbJy2BYhyXhtPDwt42mHcsD0r+VFi2ug5aLVsIcab+PZCgrdm+mUXkpK9aJYSkfvt2fbGfSPYXX1ZXyzA9ZZdcJQvV/b+0hEU6FiRPZrsnR6mCp+6SSorCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8GP8H12OwpeUuUWsAAAAASUVORK5CYII=',
      name: 'test3',
      job: 'لعيب فرونت اند 🖲️',
      desc: ' أى حاجه فى أى حاجه فى أى حاجه  ',
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imgacademy.com%2Fabout-img-academy&psig=AOvVaw1ZMN2G6MIOqr-hypZ9vFak&ust=1627821041504000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi52oqojfICFQAAAAAdAAAAABAD',
      name: 'test4',
      job: 'لعيب فرونت اند 🖲️',
      desc: ' أى حاجه فى أى حاجه فى أى حاجه  ',
    },
    {
      img: 'data:image/png;base64,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',
      name: 'test5',
      job: 'لعيب فرونت اند 🖲️',
      desc: ' أى حاجه فى أى حاجه فى أى حاجه  ',
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imgacademy.com%2Fabout-img-academy&psig=AOvVaw1ZMN2G6MIOqr-hypZ9vFak&ust=1627821041504000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi52oqojfICFQAAAAAdAAAAABAD',
      name: 'test6',
      job: 'لعيب فرونت اند 🖲️',
      desc: ' أى حاجه فى أى حاجه فى أى حاجه  ',
    },
    {
      name: 'test7',
      job: 'لعيب فرونت اند 🖲️',
      desc: ' أى حاجه فى أى حاجه فى أى حاجه  ',
    },
    {
      name: 'test8',
      job: 'لعيب فرونت اند 🖲️',
      desc: ' أى حاجه فى أى حاجه فى أى حاجه  ',
    },
  ];
  testArr2: Array<any> = [];
  constructor() {}

  ngOnInit(): void {
    this.animateSlider();
  }
  animateSlider() {
    let removedSliderItem: any;
    setInterval(() => {
      console.log('ggg');
      removedSliderItem = this.testArr[0];
      this.testArr.shift();
      this.testArr.push(removedSliderItem);
      console.log('this.arr', this.testArr.length);
    }, 7000);
  }
}
