import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {

constructor(private router:Router){}


  @Input() id!:number;
  @Input() title:string="";
  @Input() image:string="";
  @Input() description:string="";
  @Input() available:boolean=false;
  @Input() category!: Categorie;

  btnText:string="voir";

  getDescription(description:string){
    alert (description);
  }

  onEditCategory(id: number): void {
    this.router.navigate(['/add-category', id]);
  }

  @Output() shortedList = new EventEmitter<any>(); 
  addToShortList(){
     this.shortedList.emit({"idElement":this.id,"idUser":5})
 }
 viewProducts(): void {
  this.router.navigate(['/productsCategory', this.category.id]);
}

 

 @Output() deleteCategory = new EventEmitter<Categorie>();
 removeCategory(): void {
   const confirmation = confirm(`Êtes-vous sûr de vouloir supprimer la catégorie ${this.category} ?`);
   if (confirmation) {
     this.deleteCategory.emit(this.category);
   }
 }

 @Output() editCategory = new EventEmitter<Categorie>();
 edit(): void {
  this.router.navigate(['/edit-category', this.category.id]);
}

}
