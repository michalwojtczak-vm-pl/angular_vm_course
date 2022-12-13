import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {CategoryInterface} from '../../interfaces/category.interface';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
    categories: CategoryInterface[] = [];

    constructor(
        private categoryService: CategoryService
    ) {
    }

    ngOnInit(): void {
        this.loadCategories();
    }

    loadCategories() {
        this.categoryService.loadData().subscribe((result) => {
            this.categories = result;
        })
    }
}
