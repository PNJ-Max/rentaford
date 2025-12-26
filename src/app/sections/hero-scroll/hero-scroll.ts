import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ScrollProgressDirective } from '../../core/directives/scroll-progress';

@Component({
  selector: 'app-hero-scroll',
  standalone: true,
  imports: [
    ScrollProgressDirective,
    DecimalPipe
  ],
  templateUrl: './hero-scroll.html',
  styleUrl: './hero-scroll.css',
})
export class HeroScroll {
  progress = 0;

  onProgress(p: number) {
    this.progress = p;
  }
}
