import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

 userName:string="Gousepasha";

 message:string="";

//  received(event:string){
//   this.message=event;
//  }


}
