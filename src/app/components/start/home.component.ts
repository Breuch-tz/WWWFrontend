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

  public questions = [
    ['In welcher Branche sind Sie tätig?', 'Branche', 'branche'],
    ['Wieviele Seiten soll Ihre Seiten beinhalten?', '1,2,3 ...', 'page'],
    ['3', 'c', 'a'],
    ['4', 'd', 'b'],
    ['5', 'e', 'c'],
  ];
  public form!: FormGroup;

  constructor(private elementRef: ElementRef) {}

  @ViewChild('individualForm') individualForm!: NgForm;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.checkElementViewport();
  }

  ngOnInit() {
    this.form = new FormGroup({
      branche: new FormControl('', [Validators.required]),
      page: new FormControl('', [Validators.required]),
      a: new FormControl('', [Validators.required]),
      b: new FormControl('', [Validators.required]),
      c: new FormControl('', [Validators.required]),
    });
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

  public isRequired(controlName: string): boolean {
    const control = this.form.get(controlName);

    return control ? control.hasError('required') : false;
  }

  public websiteKonfiguration(value: any) {
    console.log(value.value);
  }
  public applyProzessbarStep() {
    const prozess = this.websiteKonfigurierenStep * 20;
    return { width: prozess + '%' };
  }

  public nextStep(value: any) {
    console.log(value);

    this.websiteKonfigurierenStep++;
  }
  public previousStep() {
    this.websiteKonfigurierenStep--;
  }
}
