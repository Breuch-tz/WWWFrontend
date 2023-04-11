import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetService {
  public list = Array();

  constructor(private http: HttpClient) {}

  public getData(): Observable<IUserModel> {
    return this.http
      .get<IUserModel>('http://localhost:3000/get/list')
      .pipe(
        tap((response: any) => {
          this.list = response.reverse();
        })
      );
  }
  
}

export interface IUserModel {
  uName: String;
}
