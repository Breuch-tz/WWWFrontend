import { Component } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('0.3s ease-out', 
                    style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 300, opacity: 1 }),
            animate('0.3s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
  
})
export class TestComponent {
  public firstFormGroup!: FormGroup;
  public secondFormGroup!: FormGroup;
  public firstSubmit:boolean = false;
  public secondSubmit:boolean = false;


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
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
    }
  }
}


