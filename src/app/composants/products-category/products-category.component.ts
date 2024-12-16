import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent {
  constructor(private route:ActivatedRoute ,private prodService:ProductsService){}

  categoryId!: number;
  filteredProducts: Product[] = [];
  categoryName!:string;
  
  listProducts !: Product[] ;


  ngOnInit(): void {
   
  

    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('id: ',this.categoryId);
    this.categoryName=this.route.snapshot.queryParamMap.get('title')!;

    console.log('name: ',this.categoryName);
   //this.filteredProducts = this.listProducts.filter(product => product.categoryId === this.categoryId);

   this.prodService.getProductsByCategoryId(this.categoryId).subscribe({
    next: (data) => {
      this.listProducts = data;
      console.log('Products fetched successfully', this.listProducts);
    },
    error: (err) => console.error('Error fetching products', err),
  });
  }

  testAlert(x:string){
    alert(x);
  }
}
