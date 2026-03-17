import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';
}



// – What is the purpose of the src/app/ folder?
// >> it contain the main codes of project like components, modules,style of html

// – What does app.component.ts contain?
//::> it contain the typescript for the parent component whitch is app

// – What is the role of app.module.ts?
//::> declares components and imports Angular modules

// – Where would you add global CSS styles?
//::> in src/styles.css

// – What does angular.json control?
//::> it controls project configuration
