import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  public onEmailCreate(emailForm: {
    eName: String;
    eEmail: String;
    eMessage: String;
    eBox: String;
    eEmailTo: String;
    eCompany: String;
  }): Observable<IEmailModel> {
    emailForm.eEmailTo = 'info@breuch.de';
    emailForm.eCompany = 'Puls der Zeit - Juwelier Breuch';

    return this.http.post<any>('http://localhost:3000', emailForm).pipe(
      tap((response: any) => {
        console.log('server response: ', response);
      })
    );
  }
}

export interface IEmailModel {
  eName: String;
  eEmail: String;
  eMessage: String;
  eBox: String;
  eEmailTo: String;
  eCompany: String;
  eCheckbox: Boolean;
}
