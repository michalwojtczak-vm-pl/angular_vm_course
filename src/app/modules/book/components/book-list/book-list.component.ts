import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";
import {BookInterface} from "../../interfaces/book.interface";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {

    constructor(
        private bookService: BookService
    ) {
    }

    ngOnInit(): void {
        if(!this.books.length){
            this.loadBooks();
        }
    }

    get books(): BookInterface[]{
        return this.bookService.books;
    }

    loadBooks(): void {
        this.bookService.loadData();
    }
}
