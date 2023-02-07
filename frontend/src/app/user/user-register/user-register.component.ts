import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/model/user';
import * as alertyfy from 'alertifyjs'
import { AlertyfyService } from 'src/app/services/alertyfy.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  userSubmitted: boolean;
  // user:any = {};
  user:User;

  constructor(private fb:FormBuilder, private userService: UserServiceService, private alertyfyService: AlertyfyService) { }

  ngOnInit() {
  // this.registerationForm = new FormGroup( {
  //   userName: new FormControl(null,Validators.required),
  //   email: new FormControl(null,[Validators.required,Validators.email]),
  //   password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
  //   confirmPassword: new FormControl(null,Validators.required),
  //   mobile: new FormControl(null,[Validators.required,Validators.maxLength(3)])
  // }, this.passwordMatchingValidator);

  // Lines 17 to 23 are replaced by
  this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registerationForm = this.fb.group({
      userName: [null,Validators.required],
      email: [null,[Validators.required,Validators.email]],
      password: [null, [Validators.required, Validators.minLength(3)]],
      confirmPassword: [null,Validators.required],
      mobile: [null,[Validators.required,Validators.maxLength(3)]]
    }, {validators: this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fg:FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {notMatched: true}
  }

  onSubmit() {
    console.log(this.registerationForm);

    this.userSubmitted = true;

    if(this.registerationForm.valid) {
      // this.user = Object.assign(this.user, this.registerationForm.value)  //Object.assign is used to assign the value of one objectr into another object
      // Instead  of above line model is used to assign data and replaced line 56 (this.userService.addUser(this.user);) with line 57 (this.userService.addUser(this.userData());)
      // localStorage.setItem('Users', JSON.stringify(this.user));    //convert object into string using JSON.stringfy
      // this.userService.addUser(this.user);
      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted = false;
      this.alertyfyService.success("User Registered Sucessfully");
    } else {
      this.alertyfyService.error("Please Try Again")
    }
  }


  userData(): User  {
    return this.user = {
      userName : this.userName.value,
      email : this.email.value,
      password : this.password.value,
      mobile : this.mobile.value
    }

  }

  

  onReset() {

  }

  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }

}
