import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // ✅ Only this, NOT CommonModule
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { BooksService } from './modules/home/books.service';



@NgModule({
    declarations: [AppComponent],

  imports: [
    BrowserModule,              // ✅ Required in root

    HomeModule,
    AppRoutingModule, 
     ],  

  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
