import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
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

    if (
      bounding.top >= -200 &&
      bounding.left >= 0 &&
      bounding.right <= window.innerWidth &&
      bounding.bottom - 200 <= window.innerHeight
    ) {
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
    }
  }

  private async delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
