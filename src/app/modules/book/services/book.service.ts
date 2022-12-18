import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookInterface} from '../interfaces/book.interface';
import {FormGroup} from "@angular/forms";

@Injectable()
export class BookService {

    books: BookInterface[] = [];

    constructor(
        private http: HttpClient
    ) {
    }

    loadData() {
        this.http.get<BookInterface[]>('/api/books').subscribe((result) => {
            this.books = result;
        });
    }

    getData(id: number) {
        return this.http.get<BookInterface>(`/api/books/${id}`);
    }

    create(form: FormGroup) {
        return this.http.post <BookInterface>('/api/books', form.value);
    }

    update(id: number, form: FormGroup) {
        return this.http.patch <BookInterface>(`/api/books/${id}`, form.value);
    }

    addRecord(book: BookInterface, id: number) {
        book.id = id + 1;
        this.books.push(book);
    }

    updateRecord(book: BookInterface) {
        let bookRecord = this.books.find((b) => +b.id === +book.id);
        if (bookRecord) {
            bookRecord.title = book.title;
        }

    }
}
