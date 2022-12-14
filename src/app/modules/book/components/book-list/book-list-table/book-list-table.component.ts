import {Component, Input, OnInit} from '@angular/core';
import {BookInterface} from "../../../interfaces/book.interface";

@Component({
  selector: 'app-book-list-table',
  templateUrl: './book-list-table.component.html',
  styleUrls: ['./book-list-table.component.scss'],
})
export class BookListTableComponent implements OnInit {
  @Input() public books: BookInterface[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
