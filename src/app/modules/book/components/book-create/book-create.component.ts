import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../services/book.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-book-create',
    templateUrl: './book-create.component.html',
    styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

    formBook!: FormGroup;

    constructor(private bookService: BookService, private router: Router) {

    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.formBook = new FormGroup({
            title: new FormControl(null, [Validators.required, Validators.minLength(10)])
        })
    }

    save() {
        if (!this.formBook.valid) {
            return;
        }

        this.bookService.create(this.formBook).subscribe((result) => {
            this.bookService.addRecord(this.formBook.value, this.bookService.books.length);
            this.router.navigateByUrl('/books/list');
        })
    }

}
