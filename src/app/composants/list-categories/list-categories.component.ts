import { Component, QueryList, ViewChildren } from '@angular/core';
import {  Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { shortList } from 'src/app/models/shortList';
import { CardComponentComponent } from '../card-component/card-component.component';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
constructor(private router:Router ,private catSer : CategoriesService){}

  shortList : shortList[] = [];
  titre: string = '';
  categories!: Categorie[] ;
  
  ngOnInit(){
    this.catSer.getListCategoriesFromBackend().subscribe(
      (data) => {this.categories = data;},
      (erreur) => {console.log(erreur);}
    );
  }

  productCat(categorieId: number,title:string) { //avec pathparam
    this.router.navigate(['/productsCategory', categorieId],{queryParams:{title:title}});
  }

  voirProduits2(categoryId: number) { //avec querparam
    this.router.navigate(['/products-category-qp'], { queryParams: { id: categoryId } });
  }

  testAlert(x:string){
    alert(x);
  }

   
   selectedCategoryId: number | null = null;

   toggleCategoryDetails(categoryId: number) {
  
     if (this.selectedCategoryId === categoryId) {
       this.selectedCategoryId = null;
     } else {
       this.selectedCategoryId = categoryId;
     }
   }
//use output to send data from child to parent
   addToShortList(category:shortList){
    let exist : boolean =  false;
    for(let c of this.shortList){
      if (c.idElement== category.idElement && c.idUser == category.idUser){
        exist = true;
      }
      break;
    }
    if (exist) {
      alert ("Category already a favorite")
    }
    else{
    category.typeElement="category";
    this.shortList.push(category);
    console.log(this.shortList);
    }
  }

  //use viewChildren to access child component card acces to btn text
  @ViewChildren(CardComponentComponent)
  children!: QueryList<CardComponentComponent>;
  ngAfterViewInit() {
    this.children.forEach(child => {
      child.btnText='Voir produits';
  })}

  editingCategory: Categorie | null = null;
  onEditCategory(category: Categorie): void {
    this.editingCategory = { ...category }; // Clone the category for editing
  }

  onDeleteCategory(category: Categorie): void {
    this.catSer.deleteCategoryFromBackend(category).subscribe({
      next: () => {
        // Supprimer la catégorie de la liste localement
        this.categories = this.categories.filter((cat) => cat.id !== category.id);
      },
      error: (err) => {
        console.error('Erreur lors de la suppression de la catégorie :', err);
        alert('Impossible de supprimer cette catégorie. Veuillez réessayer.');
      },
    });
  }

}
