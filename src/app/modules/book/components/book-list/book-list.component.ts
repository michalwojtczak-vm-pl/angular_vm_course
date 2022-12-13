import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {BookInterface} from "../../interfaces/book.interface";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: BookInterface[]= [];
  constructor(
      private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(){
    this.bookService.loadBook().subscribe((result ) => {
      this.books = result;
    })
  }
}
