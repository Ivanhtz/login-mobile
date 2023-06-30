import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthsService {

  constructor() { }

  getToken(): string | null {
    return sessionStorage.getItem('accessToken');
  }

  saveToken(token: string) {
    sessionStorage.setItem('accessToken', token);
  }

  removeToken(): void {
    sessionStorage.removeItem('accessToken');
  }

  isAuthenticated(): Boolean {
    return this.getToken() !== null;
  }
}
