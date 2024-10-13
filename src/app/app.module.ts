import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { FooterComponent } from './composants/footer/footer.component';
import { HomeComponent } from './composants/home/home.component';
import { ListCategoriesComponent } from './composants/list-categories/list-categories.component';
import { ProfileComponent } from './modules/profile/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { TablevaluePipe } from './pipes/tablevalue.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { NotFoundPageComponent } from './composants/not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './composants/products-category/products-category.component';
import { ProductsCategoryQPComponent } from './composants/products-category-qp/products-category-qp.component';



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
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
