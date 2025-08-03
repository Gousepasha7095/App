import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user, { responseType: 'json' });
  }


}
