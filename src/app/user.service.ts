import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = '';
  constructor(private _http: HttpClient) { }

  registerUser(user){
    return this._http.post(`${this.baseURL}`, user);
  }
}
