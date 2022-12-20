import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CategoryInterface } from '../../interfaces/category.interface';
import { CategorySubsService } from '../../services/category-subs.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { IsbnInterface } from '../../interfaces/isbn.interface';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  isLoading = false;
  constructor(
      private categoryService: CategoryService,
      private categorySubService: CategorySubsService,
      private http: HttpClient
  ) { }

  async loadAllDataAndFix() {
    this.isLoading = true;
    forkJoin({
      categories: this.http.get<CategoryInterface[]>('/api/categories'),
      isbns: this.http.get<IsbnInterface[]>('/api/isbn'),
      extra_data: this.http.get<IsbnInterface[]>('/api/extra_data')
    }).subscribe((result) => {
      console.log(result)
      this.isLoading = false;
    })

    // let categories: CategoryInterface[];
    // let isbns: IsbnInterface[];
    // let extra_data;
    //
    // this.http.get<CategoryInterface[]>('/api/categories').subscribe((result) => {
    //   categories = result;
    //
    //   this.http.get<IsbnInterface[]>('/api/isbn').subscribe((result2) => {
    //     isbns = result2;
    //
    //     this.http.get<IsbnInterface[]>('/api/extra_data').subscribe((result3) => {
    //       extra_data = result3;
    //
    //       console.log('categories', categories)
    //       console.log('isbns', isbns)
    //       console.log('extra_data', extra_data)
    //
    //     })
    //   })
    // })
    //
    // const categories = await this.http.get<CategoryInterface[]>('/api/categories').toPromise();
    // const isbns = await this.http.get<IsbnInterface[]>('/api/isbn').toPromise();
    // const extra_data = await this.http.get<IsbnInterface[]>('/api/extra_data').toPromise();
  }


  ngOnInit(): void {

    // console.log(localStorage.getItem('klucz1'));
    // localStorage.setItem('klucz1', "1");
    // localStorage.removeItem('klucz1')
    // localStorage.clear()


    //
    //
    // console.log('Zaczynam obserwować rzeczke z listingu')
    // this.categorySubService.dataChangedSub().subscribe((result) => {
    //   console.log('przyszło w listingu o wartości ', result)
    // })
    //
    //
    //
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
