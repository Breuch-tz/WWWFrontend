import { Component } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { ElementRef, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  

  public ngStyle1: String = 'ngStyleBefore';
  public ngStyle2: String = 'ngStyleBefore';

  constructor(private elementRef: ElementRef) {}
  

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.checkElementViewport();
  }

  private checkElementViewport() {
    if (window.innerHeight <= 880) {
      this.ngStyle1 = 'ngStyleAfter';
      this.ngStyle2 = 'ngStyleAfter';
      return;
    }

    const myElementA = this.elementRef.nativeElement.querySelector('#section1');
    const myElementB = this.elementRef.nativeElement.querySelector('#section2');

    const elements = [myElementA, myElementB];

    for (let i = 0; i < elements.length; i++) {
      const bounding = elements[i].getBoundingClientRect();

      if (
        bounding.top >= -300 &&
        bounding.left >= 0 &&
        bounding.right <= window.innerWidth &&
        bounding.bottom - 300 <= window.innerHeight
      ) {
        switch (i + 1) {
          case 1:
            this.ngStyle1 = 'ngStyleAfter';
            break;
          case 2:
            this.ngStyle2 = 'ngStyleAfter';
            break;
        }
      } else {
        // this.ngStyle = 'ngStyle2';
      }
    }
  }
}
