import { Component, OnInit } from '@angular/core';
import { AlertyfyService } from '../services/alertyfy.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedInUser:string;

  constructor(private alertyfyService: AlertyfyService) { }

  ngOnInit() {
  }

  loggedIn(){
    this.loggedInUser =  localStorage.getItem('token');
    return this.loggedInUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    this.alertyfyService.success("You are logged out");
  }


  //href resets our application state hence use is for home page only Angular provides a directive called routerLink which is used instead of href
  // routerLinkActive directive is used to make a link active dynamically
  //RouterLinkActive directive works on matching pattern if the link is partially matched then also active css will be added to the associated element (link)
  // To overcome partial matching angular provides a property  [routerLinkActiveOptions]="{exact:true}"
}
