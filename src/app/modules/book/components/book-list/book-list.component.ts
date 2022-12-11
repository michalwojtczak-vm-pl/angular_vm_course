import { Component, OnInit } from '@angular/core';
import {CategoryInterface} from "../../../category/interfaces/category.interface";
import {BookInterface} from "../../interface/book.interface";
import {BookService} from "../../book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: BookInterface[] = [];
  displayedColumns: string[] = ['id', 'title'];

  constructor(private bookService: BookService) {

  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.loadData().subscribe((result) => {
      this.books = result;
    })
  }
}