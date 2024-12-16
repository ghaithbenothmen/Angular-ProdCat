import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie';
import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  apiUrlCat: string="http://localhost:3000/categories";

constructor(private http:HttpClient,private productService: ProductsService) {
  

 }

 getListCategoriesFromBackend(): Observable<Categorie[]>{

  return this.http.get<Categorie[]>(this.apiUrlCat); 
}

deleteCategoryFromBackend(category: Categorie): Observable<void> {
  // Supprimer les produits liés à cette catégorie
  this.productService.deleteProductsByCategory(category.id).subscribe();

  // Supprimer ensuite la catégorie
  return this.http.delete<void>(`${this.apiUrlCat}/${category.id}`);
}

  addCategory(category: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.apiUrlCat,category);}

    getCategoryById(id: number): Observable<Categorie> {
      return this.http.get<Categorie>(`${this.apiUrlCat}/${id}`);
    }


    updateCategory(category: Categorie): Observable<Categorie> {
      return this.http.put<Categorie>(`${this.apiUrlCat}/${category.id}`, category);
    }






  /* categories: Categorie[] = [
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

  products = this.prodServ.getProducts();

  getCategories(): Categorie[] {
    return this.categories;
  }

  getCategoryById(id: number): Categorie {
    return this.categories.find(c => c.id === id)!;
  }

  addCategory(category: Categorie) {
    this.categories.push(category);
  }

  deleteCategory(id: number) {
    this.categories = this.categories.filter(c => c.id !== id);
    for (let product of this.products) {
      if (product.categoryId === id) {
        this.prodServ.deleteProduct(product.id);
      }
    }
  }

  updateCategory(category: Categorie) {
    const index = this.categories.findIndex(c => c.id === category.id);
    this.categories[index] = category;
  }
 */





  
}
