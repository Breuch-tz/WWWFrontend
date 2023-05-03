import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public ngStyle1: String = 'ngStyleBefore';
  public ngStyle2: String = 'ngStyleBefore';
  public ngStyle3: String = 'ngStyleBefore';
  public ngStyle4: String = 'ngStyleBefore';
  public ngStyle5: String = 'ngStyleBefore';
  public ngStyle6: String = 'ngStyleBefore';

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.checkElementViewport();
  }
  private async checkElementViewport() {
    const myElementAnimation =
      this.elementRef.nativeElement.querySelector('#animation');

    const bounding = myElementAnimation.getBoundingClientRect();

    if (bounding.top <= 500 && bounding.left >= 0) {
      this.ngStyle1 = 'ngStyleAfter';
      await this.delay(300);
      this.ngStyle2 = 'ngStyleAfter';
      await this.delay(300);
      this.ngStyle3 = 'ngStyleAfter';
      await this.delay(300);
      this.ngStyle4 = 'ngStyleAfter';
      await this.delay(300);
      this.ngStyle5 = 'ngStyleAfter';
      await this.delay(300);
      this.ngStyle6 = 'ngStyleAfter';
    } else {
      this.ngStyle1 = 'ngStyleBefore';
      await this.delay(300);
      this.ngStyle2 = 'ngStyleBefore';
      await this.delay(300);
      this.ngStyle3 = 'ngStyleBefore';
      await this.delay(300);
      this.ngStyle4 = 'ngStyleBefore';
      await this.delay(300);
      this.ngStyle5 = 'ngStyleBefore';
      await this.delay(300);
      this.ngStyle6 = 'ngStyleBefore';
    }
  }

  private async delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
