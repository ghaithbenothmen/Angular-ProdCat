import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './composants/home/home.component';
import { NotFoundPageComponent } from './composants/not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './composants/products-category/products-category.component';
import { ProductsCategoryQPComponent } from './composants/products-category-qp/products-category-qp.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  
  { path: 'productsCategory/:id', component: ProductsCategoryComponent },
  { path: 'products-category-qp', component: ProductsCategoryQPComponent },

  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
