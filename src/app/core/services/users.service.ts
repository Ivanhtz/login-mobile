import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Iuser } from '../interfaces/iuser.interface';
import { IuserLogin } from '../interfaces/iuser-login.interface';
import { Iresponse } from '../interfaces/iresponse.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrlAuth: string = 'http://51.38.51.187:5050/api/v1/auth';

  private apiUrlUsers: string = 'http://51.38.51.187:5050/api/v1/users';

  constructor(private http: HttpClient) { }


  registerUser(user: Iuser): Observable<Iuser> {
    return this.http.post<Iuser>(`${this.apiUrlAuth}/sign-up`, user).pipe(catchError(this.handleError<Iuser>('register')));
  }


  login(userLogin: IuserLogin): Observable<Iresponse> {
    return this.http.post<Iresponse>(`${this.apiUrlAuth}/log-in`, userLogin).pipe(catchError(this.handleError<Iresponse>('login')));
  }


  getUsers(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(this.apiUrlUsers).pipe(
      catchError(this.handleError<Iuser[]>('getUsers'))
    );
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlUsers}/${id}`);
  }


  private handleError<T>(operation = 'operation') {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return throwError(() => error)
    }
  }
}
