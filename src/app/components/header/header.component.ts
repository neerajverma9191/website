import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  testHtml = '<h1 class="slider-title" data-animation-in="fadeInLeft" data-animation-out="animate-out">Best <span class="red-color">Education</span> For <span class="orange-color">your</span> kids</h1>'
  imageObject = [{
    image: 'assets/images/slider_1.jpg',
    thumbImage: 'assets/images/slider_1.jpg',
  }, {
    image: 'assets/images/slider_2.jpg',
    thumbImage: 'assets/images/slider_2.jpg'
  }, {
    image: 'assets/images/slider_2.jpg',
    thumbImage: 'assets/images/slider_2.jpg',
  }];
  title = 'owlcarouselinAngular';
  Images = ['../assets/images/slider_1.jpg', '../assets/images/slider_2.jpg', '../assets/images/slider_2.jpg'];

  SlideOptions = { items: 1, dots: true, nav: true };
  CarouselOptions = { items: 3, dots: true, nav: true };
  constructor() { }

  ngOnInit(): void {
  }

}
