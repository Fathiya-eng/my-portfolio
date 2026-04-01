import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  message:string = "Hello from Parent! ";

  receivedData = '';
onReceive(value: any) { 
  this.receivedData = value; 
}

SendData(data:any){
  this.message = data.target.value
}

}
