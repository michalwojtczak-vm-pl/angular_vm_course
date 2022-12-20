import { NgModule } from '@angular/core';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoryComponent } from './category.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { CategoryService } from './services/category.service';
import { CategorySubsService } from './services/category-subs.service';
import { SharedModule } from '../../shared/shared.module';

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
      }
    ]
  }

];


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryComponent,
    CategoryEditComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    CategoryService,
    CategorySubsService
  ]
})
export class CategoryModule { }
