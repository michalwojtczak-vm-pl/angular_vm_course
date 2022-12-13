import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {RouterModule, Routes} from '@angular/router';
import {CategoryCreateComponent} from './components/category-create/category-create.component';
import {CategoryComponent} from './category.component';
import {CategoryEditComponent} from './components/category-edit/category-edit.component';
import {CategoryService} from './services/category.service';
import { CategoryListRowComponent } from './components/category-list/components/category-list-row/category-list-row.component';
import { CategoryListTableComponent } from './components/category-list/components/category-list-table/category-list-table.component';

const routes: Routes = [
    {
        path: '',
        component: CategoryComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list'
            },
            {
                path: 'list',
                component: CategoryListComponent
            },
            {
                path: 'create',
                component: CategoryCreateComponent
            },
            {
                path: 'edit/:categoryId',
                component: CategoryEditComponent
            }
        ]
    }

];


@NgModule({
    declarations: [
        CategoryListComponent,
        CategoryCreateComponent,
        CategoryComponent,
        CategoryEditComponent,
        CategoryListRowComponent,
        CategoryListTableComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        CategoryService
    ]
})
export class CategoryModule {
}
