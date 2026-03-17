import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 studentName :string= "Fathiya";
 profileImage:string = "assets/natural.JPEG";
 isDisabled:boolean = true;
 message:string = " ";

 onButtonClick() {
    this.message = "Button was clicked!";
  }

}

