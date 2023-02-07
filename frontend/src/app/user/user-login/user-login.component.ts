import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertyfyService } from 'src/app/services/alertyfy.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router, private alertyfyService: AlertyfyService) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value)
    const token = this.authService.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token',token.userName);
      this.alertyfyService.success("LoggedIn Sucessfully");
      this.router.navigate(['/']);

    } else {
      this.alertyfyService.error("Either Username or Password is incorrect");
    }
  }

}
