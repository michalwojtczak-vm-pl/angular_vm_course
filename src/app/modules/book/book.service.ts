import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookInterface} from "./interface/book.interface";

@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor(private http: HttpClient) {
    }

    loadData() {
      return this.http.get<BookInterface[]>('/api/books');
    }
}