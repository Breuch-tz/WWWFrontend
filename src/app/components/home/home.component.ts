import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public ngStyle: String = 'ngStyle2';
  constructor(private elementRef: ElementRef) {}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.checkElementViewport();
  }

  private checkElementViewport() {
    if (window.innerHeight <= 880) {
      this.ngStyle = 'ngStyle1';
      return;
    }
    const myElement = this.elementRef.nativeElement.querySelector('#trauringe');
    const bounding = myElement.getBoundingClientRect();

    if (
      bounding.top >= -150 &&
      bounding.left >= 0 &&
      bounding.right <= window.innerWidth &&
      bounding.bottom - 150 <= window.innerHeight
    ) {
      this.ngStyle = 'ngStyle1';
    } else {
      // this.ngStyle = 'ngStyle2';
    }
  }
}
