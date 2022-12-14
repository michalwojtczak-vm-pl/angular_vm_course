import { Component, OnInit } from '@angular/core';
import { BookInterface } from '../../interfaces/book.interface';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: BookInterface[] = [];
  constructor(
      private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.bookService.loadData().subscribe((result) => {
      this.books = result;
    })
  }
}
