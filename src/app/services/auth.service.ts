import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private http = inject(HttpClient)
    private server = "http://localhost:3000"


  login(email: string, password: string) {
    return this.http.post<any>(`${this.server}/api/auth`, { email, password });
}

}
