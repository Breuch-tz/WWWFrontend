import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  public createEmail(emailForm: {
    eName: String;
    eEmail: String;
    eMessage: String;
    eEmailTo: String;
    eCompany: String;
    eCheckbox: Boolean;
  }): Observable<IEmailModel> {
    return this.http.post<any>('http://localhost:3000', emailForm);
  }
}

export interface IEmailModel {
  eName: String;
  eEmail: String;
  eMessage: String;
  eEmailTo: String;
  eCompany: String;
  eCheckbox: Boolean;
}
