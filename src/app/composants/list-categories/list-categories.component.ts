import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
constructor(private router:Router ){}

  titre: string = '';
  categories: Categorie[] = [
    {
      "id": 1, "title": "Grand électroménager",
      "image": "assets/images/categorie_electromenager.jpg", "description": "électroménager plus",
      "available": true
    },
    {
      "id": 2, "title": "Petit électroménager",
      "image": "assets/images/categorie_petit_electromenager.jpg", "description": "petit_electromenager plus",
      "available": true
    },
    {
      "id": 3, "title": "Produits informatiques",
      "image": "assets/images/categorie_produits_informatiques.jpg", "description": "informatiques plus",
      "available": true
    },
    {
      "id": 4, "title": "Smart Phones", "image": "assets/images/categorie_smartPhone.jpg",
      "description": "categorie_smartPhone plus", "available": true
    },
    {
      "id": 5, "title": "TV, images et son",
      "image": "assets/images/categorie_tv_image_son.jpg", "description": "categorie_tv_image_son plus",
      "available": true
    },
    {
      "id": 6, "title": "Produits voiture", "image": "assets/images/produits_nettoyages.jpg",
      "description": "", "available": false
    }
  ]

  productCat(categorieId: number) { //avec pathparam
    this.router.navigate(['/productsCategory', categorieId]);
  }

  voirProduits2(categoryId: number) { //avec querparam
    this.router.navigate(['/products-category-qp'], { queryParams: { id: categoryId } });
  }

  testAlert(x:string){
    alert(x);
  }

}
