import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  NgForm,
  Validators,
} from '@angular/forms';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.5s ease-out', style({ height: 25, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: 25, opacity: 1 }),
        animate('0.5s ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class HomeComponent {
  public ngStyle1: String = 'ngStyleBefore';
  public ngStyle2: String = 'ngStyleBefore';
  public ngStyle3: String = 'ngStyleBefore';
  public priceButton: String = 'ngStyleBeforeSlide';

  public websiteKonfigurierenStep: number = 1;
  public websiteKonfigurierenStepMax: number = 4;

  public firstFormGroup!: FormGroup;
  public secondFormGroup!: FormGroup;
  public thirdFormGroup!: FormGroup;
  public lastFormGroup!: FormGroup;
  public firstSubmit: boolean = false;
  public secondSubmit: boolean = false;
  public thirdSubmit: boolean = false;
  public lastSubmit: boolean = false;

  constructor(private elementRef: ElementRef, private fb: FormBuilder) {}

  @ViewChild('individualForm') individualForm!: NgForm;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.checkElementViewportAnimation();
    this.checkElementViewportPriceButton();
  }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this.fb.group({
      firstCtrl: ['', ''],
    });
    this.lastFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
  }

  private async checkElementViewportPriceButton() {
    const myElement = this.elementRef.nativeElement.querySelector(
      '#priceButtonAnimation'
    );

    const bounding = myElement.getBoundingClientRect();

    if (bounding.top <= 600 && bounding.left >= 0) {
      this.priceButton = 'ngStyleAfter';
    } else {
      this.priceButton = 'ngStyleBeforeSlide';
    }
  }

  private async checkElementViewportAnimation() {
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

  public websiteKonfigurierenStepPlus() {
    if (this.websiteKonfigurierenStep == this.websiteKonfigurierenStepMax) {
      return;
    }
    this.websiteKonfigurierenStep++;
  }
  public websiteKonfigurierenStepMinus() {
    if (this.websiteKonfigurierenStep == 1) {
      return;
    }
    this.websiteKonfigurierenStep--;
  }

  public applyProzessbarStep() {
    const prozess =
      (this.websiteKonfigurierenStep / this.websiteKonfigurierenStepMax) * 100;
    return { width: prozess + '%' };
  }

  get registerFormControl() {
    return this.firstFormGroup.controls;
  }

  onSubmit(formNumber: number) {
    switch (formNumber) {
      case 1:
        this.firstSubmit = true;
        break;
      case 2:
        this.secondSubmit = true;
        break;
      case 3:
        this.thirdSubmit = true;
        break;
      case 99:
        this.lastSubmit = true;
        break;
    }
  }
  public getAllForms(
    firstFormGroup: any,
    secondFormGroup: any,
    thirdFormGroup: any,
    stepperReset: any
  ) {
    console.log(firstFormGroup);
    console.log(secondFormGroup);
    console.log(thirdFormGroup);

    this.firstSubmit = false;

    this.secondSubmit = false;

    this.thirdSubmit = false;

    this.lastSubmit = false;

    stepperReset.reset();
    this.websiteKonfigurierenStep = 1;
  }
}
