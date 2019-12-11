import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "https://3000-b50d0264-8aa8-4781-ad61-2042e5a2b9f8.ws-us02.gitpod.io/api/";
  appUserUrl: string = "appUsers/"

  isLoggedIn : boolean = false;

  constructor(private _http: HttpClient) { }

  registerUser(userCredentials){
    return this._http.post(`${this.baseUrl}${this.appUserUrl}`, userCredentials);
  }
}
