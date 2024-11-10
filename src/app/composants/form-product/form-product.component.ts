import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {


  product: Product = new Product(); 
  productList: Product[] = []; 
  private nextId = 1; 


  addproduct() {
    
    this.product.id = this.nextId++;
    
   
    this.productList.push({ ...this.product });

   
    this.product = new Product();
  }

}
