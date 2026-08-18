import {
  AfterViewInit,
  Component,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements AfterViewInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      import('aos').then(({ default: AOS }) => {

        AOS.init({
          duration: 1000,
          once: true,
          offset: 50
        });

        setTimeout(() => {
          AOS.refreshHard();
        }, 100);

      });

    }
  }
}