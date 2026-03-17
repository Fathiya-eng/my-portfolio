import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

   isLoggedIn:Boolean = false;

   toggleLogin() {
 this.isLoggedIn = !this.isLoggedIn;;
 }

 skills: string[] = ['Angular', 'TypeScript', 'HTML', 'CSS'];

  userRole = 'admin'; // can be 'admin', 'editor', or 'viewer'

}
