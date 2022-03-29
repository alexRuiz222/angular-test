import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _httpClient: HttpClient) { }

  getPerfiles() {
    return this._httpClient.get(`http://localhost:8081/assets/data/users.json`);
  }
}
