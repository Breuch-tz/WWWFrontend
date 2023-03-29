import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { EmailValidatorService } from '../../services/email-validator.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(
    private emailService: EmailService,
    public emailValidatorService: EmailValidatorService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {}
  openSnackBar(message: string) {
    let config = new MatSnackBarConfig();
    config.panelClass = ['custom-snackbar'];
    config.horizontalPosition = 'start';
    config.verticalPosition = 'bottom';
    config.duration = 3000;
    this.snackBar.open(message, '', config);
  }
  public async createEmail(
    emailForm: {
      eName: String;
      eEmail: String;
      eMessage: String;
      eBox: String;
      eEmailTo: String;
      eCompany: String;
      eCheckbox: Boolean;
    },
    resetForm: any
  ) {
    if (!this.emailValidatorService.validateForm(emailForm)) {
      return;
    }
    this.emailService.onEmailCreate(emailForm).subscribe();
    resetForm.resetForm();
    this.openSnackBar('Email gesendet');
  }
}
