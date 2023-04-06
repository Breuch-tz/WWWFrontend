import { Component } from '@angular/core';
import { EmailValidatorService } from '../../services/email-validator.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { PostService } from 'src/app/mongo/post/post.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(
    private post: PostService,
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
    emailForm.eEmailTo = 'breuch.tizian@gmail.com';
    emailForm.eCompany = 'Puls der Zeit - Juwelier Breuch';
    if (!this.emailValidatorService.validateForm(emailForm)) {
      return;
    }
    this.post.onEmailCreate(emailForm).subscribe();
    resetForm.resetForm();
    this.openSnackBar('Email gesendet');
  }
}
