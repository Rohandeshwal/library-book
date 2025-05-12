import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BooksService } from '../../books.service';



@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

books$: Observable<any[]> = of([]);

  constructor(private booksService: BooksService) {
  }

  ngOnInit() {
    this.books$ = this.booksService.getBooks();
  }
}