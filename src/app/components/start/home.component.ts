import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public ngStyle1: String = 'ngStyleBefore';
  public ngStyle2: String = 'ngStyleBefore';
  public ngStyle3: String = 'ngStyleBefore';

  public websiteKonfigurierenStep: number = 0;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.checkElementViewport();
  }
  private async checkElementViewport() {
    const myElement = this.elementRef.nativeElement.querySelector('#animation');

    const bounding = myElement.getBoundingClientRect();

    if (bounding.top <= 700 && bounding.left >= 0) {
      this.ngStyle1 = 'ngStyleAfter';
      await this.delay(300);
      this.ngStyle2 = 'ngStyleAfter';
      await this.delay(300);
      this.ngStyle3 = 'ngStyleAfter';
      await this.delay(300);
    } else {
      this.ngStyle1 = 'ngStyleBefore';
      await this.delay(300);
      this.ngStyle2 = 'ngStyleBefore';
      await this.delay(300);
      this.ngStyle3 = 'ngStyleBefore';
      await this.delay(300);
    }
  }
  private async delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public websiteKonfiguration(value: String) {
    console.log(value);
  }
  public applyProzessbarStep() {
    const prozess = this.websiteKonfigurierenStep * 10;
    return { width: prozess + '%' };
  }
}
