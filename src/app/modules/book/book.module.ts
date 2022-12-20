import { NgModule } from '@angular/core';
import { BookComponent } from './book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { RouterModule, Routes } from '@angular/router';
import {BookService} from "./services/book.service";
import { BookListTableComponent } from './components/book-list/book-list-table/book-list-table.component';
import { BookListTableRowComponent } from './components/book-list/book-list-table/book-list-table-row/book-list-table-row.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: BookListComponent
      },
      {
        path: 'create',
        component: BookCreateComponent
      }
    ]
  }

];

@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookCreateComponent,
    BookListTableComponent,
    BookListTableRowComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    BookService
  ]
})
export class BookModule { }
