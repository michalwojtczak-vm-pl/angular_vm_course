import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoryComponent } from './category.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { CategoryService } from './services/category.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CategorySubsService } from './services/category-subs.service';
import { CategoryDeleteComponent } from './components/category-delete/category-delete.component';

//   /categories
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
      },
      {
        path: 'delete/:categoryId',
        component: CategoryDeleteComponent
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
    CategoryDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [
    CategoryService,
    CategorySubsService
  ]
})
export class CategoryModule { }
