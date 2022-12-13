import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookComponent} from './book.component';
import {BookListComponent} from './components/book-list/book-list.component';
import {BookCreateComponent} from './components/book-create/book-create.component';
import {RouterModule, Routes} from '@angular/router';
import {BookEditComponent} from './components/book-edit/book-edit.component';

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
            },
            {
                path: 'edit/"bookId',
                component: BookEditComponent
            }
        ]
    }

];

@NgModule({
    declarations: [
        BookComponent,
        BookListComponent,
        BookCreateComponent,
        BookEditComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class BookModule {
}
