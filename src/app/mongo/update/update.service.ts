import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

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
    
    return this.http
      .post<any>(`http://localhost:3000/update/list/${postForm.pId}`, postForm)
      .pipe(
        tap((res) => {
          console.log("update");
          console.log(res);
          this.refreshList.next();
        })
      );
  }
}

export interface IPostModel {
  pHeader: String;
  pSubheader: String;
  pMessage: String;
  pDate: String;
}
