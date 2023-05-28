import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public ngStyle1: String = 'ngStyleBefore';
  public ngStyle2: String = 'ngStyleBefore';
  public ngStyle3: String = 'ngStyleBefore';

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.checkElementViewportAnimation();
  }

  private async checkElementViewportAnimation() {
    const myElement = this.elementRef.nativeElement.querySelector('#animation');

    const bounding = myElement.getBoundingClientRect();

    if (bounding.top <= 700 && bounding.left >= 0) {
      this.ngStyle1 = 'ngStyleAfter';
      await this.delay(450);
      this.ngStyle2 = 'ngStyleAfter';
      await this.delay(450);
      this.ngStyle3 = 'ngStyleAfter';
      await this.delay(450);
    } else {
      this.ngStyle1 = 'ngStyleBefore';
      await this.delay(450);
      this.ngStyle2 = 'ngStyleBefore';
      await this.delay(450);
      this.ngStyle3 = 'ngStyleBefore';
      await this.delay(450);
    }
  }
  private async delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
