import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../services/book.service";
import {CategoryService} from "../../../category/services/category.service";
import {BookInterface} from "../../interfaces/book.interface";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  book!: BookInterface;
  formBook!: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.activatedRoute.params.subscribe((params) => {
      this.loadData(+params.bookId)
    })
  }

  loadData(id: number){
    this.bookService.getData(id).subscribe((result) =>{
      this.book = result;

      this.formBook.patchValue(this.book);
    })
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
      const book = {
        ...this.book,
        ...this.formBook.value
      }
      this.bookService.updateRecord(book);
      this.router.navigateByUrl('/books/list');
    })
  }

}
