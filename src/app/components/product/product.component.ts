import { Component, ElementRef, HostListener } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  public images!: GalleryItem[];
  
  public ngStyle1: String = 'ngStyleBefore';
  public ngStyle2: String = 'ngStyleBefore';
  public ngStyle3: String = 'ngStyleBefore';
  public ngStyle4: String = 'ngStyleBefore';
  public ngStyle5: String = 'ngStyleBefore';
  public ngStyle6: String = 'ngStyleBefore';

  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.images = [
      new ImageItem({
        src: '../../../assets/home/rolex.jpg',
        thumb: '../../../assets/home/rolex.jpg',
      }),
      new ImageItem({
        src: '../../../assets/home/Trauring klassisch.jpg',
        thumb: '../../../assets/home/Trauring klassisch.jpg',
      }),
      new ImageItem({
        src: '../../../assets/home/Zeichnung Goldschmiede.jpg',
        thumb: '../../../assets/home/Zeichnung Goldschmiede.jpg',
      }),
      new ImageItem({
        src: '../../../assets/home/zwei-goldene-eheringe.jpg',
        thumb: '../../../assets/home/zwei-goldene-eheringe.jpg',
      }),
    ];
  }
  
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
