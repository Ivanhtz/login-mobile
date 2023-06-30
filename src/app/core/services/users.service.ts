import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrlAuth: string = 'http://51.38.51.187:5050/api/v1/auth';

  private apiUrlUsers: string = 'http://51.38.51.187:5050/api/v1/users';

  constructor(private http: HttpClient) { }
}
