import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CategoryInterface } from '../../interfaces/category.interface';
import { CategorySubsService } from '../../services/category-subs.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  constructor(
      private categoryService: CategoryService,
      private categorySubService: CategorySubsService
  ) { }

  ngOnInit(): void {

    // console.log(localStorage.getItem('klucz1'));
    // localStorage.setItem('klucz1', "1");
    // localStorage.removeItem('klucz1')
    // localStorage.clear()




    console.log('Zaczynam obserwować rzeczke z listingu')
    this.categorySubService.dataChangedSub().subscribe((result) => {
      console.log('przyszło w listingu o wartości ', result)
    })



    if (!this.categories.length) {
      this.loadCategories();
    }
  }


  get categories(): CategoryInterface[] {
    return this.categoryService.categories;
  }

  loadCategories() {
    this.categoryService.loadData()
  }
}
