import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

addUser(adduser: User) {
  let users = [];
  if(localStorage.getItem('Users')) {
    users = JSON.parse(localStorage.getItem('Users'));  //JSON.parse is used to convert string into a JSON Object
    console.log(users,"Users already present")
    users = [adduser, ...users];  //... (3 dots) called as spread operator that allows the elements of an array to expand
  } else {
    users = [adduser]
  }
  localStorage.setItem('Users', JSON.stringify(users));    //convert object into string using JSON.stringfy
}

}
