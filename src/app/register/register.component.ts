import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { UserService } from '../user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 form = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  };

  constructor(private _userService: UserService, private router: Router) {}
  
  ngOnInit() {
  }

  signUp(){
    this._userService.registerUser(this.form).subscribe( (res: any)=> {
      console.log(res);
      console.log('test');
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this._userService.firstName = res.firstName;
      this._userService.isLoggedIn = true;
      this.goToDash();
    })
  }

  goToDash(){
    this.router.navigate(['/home'])
  }

}