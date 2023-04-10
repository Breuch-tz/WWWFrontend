import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeleteService {
  private refreshSubject = new Subject<void>();
  public list = Array();

  constructor(private http: HttpClient) {}

  get refreshList() {
    return this.refreshSubject;
  }

  public deleteData(pId: String): Observable<IUserModel> {
    return this.http
      .delete<IUserModel>(`http://localhost:3000/delete/list/${pId}`)
      .pipe(
        tap((response: any) => {
          console.log(response);
          this.refreshList.next();
        })
      );
  }
}

export interface IUserModel {
  uName: String;
}
