import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';


import { BooksService } from './books.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent], // ✅ Declare HomeComponent so it can be used in this module
  imports: [
    CommonModule,
    RouterModule     ,  HttpClientModule,  
  ],
  exports: [HomeComponent], 
  providers: [BooksService], // ✅ No need to provide BooksService here, it's already provided in the root
})
export class HomeModule { }
