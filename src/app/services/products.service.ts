import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  listProducts : Product[]=[
    {"id":1, "name":"Refrigérateur LG Inox",  "image":"assets/images/refrigerateur-lg.jpg", "categoryId":1, "description":"",  "price":2800,  "brand":"LG", "promotion":0},
    {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/images/refrigerateur_samsung.jpeg","categoryId":1, "description":"", "price":2400,"brand":"Samsung","promotion":0},
    {"id":3, "name":"Lave vaisselle Beko", "image":"assets/images/lave_vaisselle.png", "categoryId":1, "description":"","price":1875,"brand":"BEKO", "promotion":0},
    {"id":4, "name":"Oppo Smart Phone","image":"assets/images/oppo_smart.jpg","categoryId":4, "description":"", "price":1200,"brand":"OPPO","promotion":0},
    {"id":5, "name":"Hachoir", "image":"assets/images/hachoir.jpg","categoryId":2, "description":"","price":120,"brand":"Moulinex", "promotion":0},
    {"id":6, "name":"TV 50'' LG","image":"assets/images/tv_lg.jpg","categoryId":5, "description":"", "price":1800,"brand":"LG","promotion":10},
  ]

  getProducts(): Product[] {
    return this.listProducts;
  }

  getProductById(id: number): Product {
    return this.listProducts.find(p => p.id === id)!;
  }

  addProduct(product: Product) {
    this.listProducts.push(product);
  }

  deleteProduct(id: number) {
    this.listProducts = this.listProducts.filter(p => p.id !== id);
  }

  updateProduct(product: Product) {
    const index = this.listProducts.findIndex(p => p.id === product.id);
    this.listProducts[index] = product;
  }
}
