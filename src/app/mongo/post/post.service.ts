import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private refreshSubject = new Subject<void>();

  constructor(private http: HttpClient) {}

  get refreshList() {
    return this.refreshSubject;
  }

  public createPost(postForm: {
    pId: String;
    pHeader: String;
    pSubheader: String;
    pMessage: String;
    pDate: String;
  }): Observable<IPostModel> {
    console.log(postForm);
    const pId = postForm.pId;
    return this.http
      .post<any>(`http://localhost:3000/post/list/${postForm.pId}`, postForm)
      .pipe(
        tap((res) => {
          console.log(res);
          this.refreshList.next();
        })
      );
  }

  public createEmail(emailForm: {
    eName: String;
    eEmail: String;
    eMessage: String;
    eEmailTo: String;
    eCompany: String;
    eCheckbox: Boolean;
  }): Observable<IEmailModel> {
    return this.http.post<any>('http://localhost:3000/email/send', emailForm);
  }
}

export interface IPostModel {
  pHeader: String;
  pSubheader: String;
  pMessage: String;
  pDate: String;
}

export interface IEmailModel {
  eName: String;
  eEmail: String;
  eMessage: String;
  eEmailTo: String;
  eCompany: String;
  eCheckbox: Boolean;
}
