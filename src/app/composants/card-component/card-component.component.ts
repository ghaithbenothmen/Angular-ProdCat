import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {

  @Input() id!:number;
  @Input() title:string="";
  @Input() image:string="";
  @Input() description:string="";
  @Input() available:boolean=false;
 
  btnText:string="";

  getDescription(description:string){
    alert (description);
  }

  @Output() shortedList = new EventEmitter<any>(); 
  addToShortList(){
     this.shortedList.emit({"idElement":this.id,"idUser":5})
 }
}
