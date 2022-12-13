import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookInterface} from "../interfaces/book.interface";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
      private http: HttpClient
  ) {
  }


  loadBook() {
    return this.http.get<BookInterface[]>('/api/books');
  }
}