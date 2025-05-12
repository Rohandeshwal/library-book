import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
// books.service.ts
@Injectable({ providedIn: 'root' })
export class BooksService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=fouling';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((res: any) => res.items || [])
    );
  }
}