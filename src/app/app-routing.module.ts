import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './composants/home/home.component';
import { NotFoundPageComponent } from './composants/not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './composants/products-category/products-category.component';
import { ProductsCategoryQPComponent } from './composants/products-category-qp/products-category-qp.component';
import { DetailsCategoryComponent } from './composants/details-category/details-category.component';
import { FormProductComponent } from './composants/form-product/form-product.component';
import { FormCVComponent } from './composants/form-cv/form-cv.component';
import { AddCategorieComponent } from './composants/add-categorie/add-categorie.component';

const routes: Routes = [

  { 
    path: 'home', component: HomeComponent ,
    children: [
      { path: 'detailsCategory/:id', component: DetailsCategoryComponent }
    ]
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  
  { path: 'productsCategory/:id', component: ProductsCategoryComponent },
  { path: 'products-category-qp', component: ProductsCategoryQPComponent },
  {path:'addproduct',component:FormProductComponent},
  {path:'addcv',component:FormCVComponent},

  {path:'addCat', component:AddCategorieComponent},
  { path: 'edit-category/:id', component: AddCategorieComponent },

  {
  path: 'contact',
  loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
    },

    {
      path: 'apropos',
      loadChildren: () => import('./modules/apropos/apropos.module').then(m => m.AproposModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
        },
        
        { path: '**', component: NotFoundPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
