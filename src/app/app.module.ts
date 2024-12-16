import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { FooterComponent } from './composants/footer/footer.component';
import { HomeComponent } from './composants/home/home.component';
import { ListCategoriesComponent } from './composants/list-categories/list-categories.component';
import { ProfileComponent } from './modules/profile/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablevaluePipe } from './pipes/tablevalue.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { NotFoundPageComponent } from './composants/not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './composants/products-category/products-category.component';
import { ProductsCategoryQPComponent } from './composants/products-category-qp/products-category-qp.component';
import { DetailsCategoryComponent } from './composants/details-category/details-category.component';
import { FormProductComponent } from './composants/form-product/form-product.component';
import { FormCVComponent } from './composants/form-cv/form-cv.component';
import { CardComponentComponent } from './composants/card-component/card-component.component';
import { ShortListComponent } from './composants/short-list/short-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCategorieComponent } from './composants/add-categorie/add-categorie.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    ProfileComponent,
    TablevaluePipe,
    HighlightDirective,
    NotFoundPageComponent,
    ProductsCategoryComponent,
    ProductsCategoryQPComponent,
    DetailsCategoryComponent,
    FormProductComponent,
    FormCVComponent,
    CardComponentComponent,
    ShortListComponent,
    AddCategorieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
