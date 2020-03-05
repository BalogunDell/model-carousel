import { Component, OnInit } from '@angular/core';
import { Slide } from '../interfaces/slide';
import dummySlides from './slides';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  lastSlideCount: string;
  currentSlide: Slide;
  fadeSlideIn: boolean;
  slides = dummySlides;
  
  ngOnInit() {
    this.currentSlide = this.slides[0];
    this.lastSlideCount = this.slides[this.slides.length - 1].count;
  }

  /**
   * Handle each slide click
   */
  handleSliderClick = (currentSlideIndex) => {
    this.slides.map(slide => {
        slide.active = false;
        return slide;
      });

    this.currentSlide = this.slides[currentSlideIndex];
    this.fadeSlideIn = true;
    this.currentSlide.active = true;
  }
}
