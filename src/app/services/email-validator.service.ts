import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService {
  public validateStyleName: String = '';
  public validateStyleEmail: String = '';
  public validateStyleMessage: String = '';
  public validateStyleCheckbox: String = '';
  public validateStyleCheckboxBoolean: Boolean = false;

  public validateFormError: String = 'validateStyleFormError';

  constructor() {}

  public validateName(emailForm: {
    eName: String;
    eEmail: String;
    eMessage: String;
    eCheckbox: Boolean;
  }) {
    if (emailForm.eName == null || emailForm.eName.length < 3) {
      return false;
    }
    return true;
  }

  public validateEmail(emailForm: {
    eName: String;
    eEmail: String;
    eMessage: String;
    eCheckbox: Boolean;
  }) {
    if (
      emailForm.eEmail == null ||
      !emailForm.eEmail.includes('@') ||
      !emailForm.eEmail.includes('.')
    ) {
      return false;
    }
    return true;
  }

  public validateMessage(emailForm: {
    eName: String;
    eEmail: String;
    eMessage: String;
    eCheckbox: Boolean;
  }) {
    if (emailForm.eMessage == null || emailForm.eMessage.length <= 10) {
      return false;
    }
    return true;
  }

  public validateCheckbox(emailForm: {
    eName: String;
    eEmail: String;
    eMessage: String;
    eCheckbox: Boolean;
  }) {
    if (
      emailForm.eCheckbox == null ||
      emailForm.eCheckbox == undefined ||
      !emailForm.eCheckbox
    ) {
      return false;
    }
    return true;
  }

  public validateForm(emailForm: {
    eName: String;
    eEmail: String;
    eMessage: String;
    eCheckbox: Boolean;
  }) {
    this.validateName(emailForm);
    this.validateEmail(emailForm);
    this.validateMessage(emailForm);
    this.validateCheckbox(emailForm);
    if (
      (this.validateName(emailForm) &&
        this.validateEmail(emailForm) &&
        this.validateMessage(emailForm) &&
        this.validateCheckbox(emailForm)) == true
    ) {
      //keinerror
      this.validateFormError = 'validateStyleFormError';
      
     
      return true;
    }
    //error
    this.validateFormError = '';
    setTimeout(()=> {
      this.validateFormError = 'validateStyleFormError';
    }, 6000);
    return false;
  }

 
}
