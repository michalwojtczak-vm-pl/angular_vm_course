import {Component, OnInit} from '@angular/core';
import {CategoryInterface} from "../../../../interfaces/category.interface";
import {CategoryService} from "../../../../services/category.service";

@Component({
    selector: 'app-category-list-table',
    templateUrl: './category-list-table.component.html',
    styleUrls: ['./category-list-table.component.scss']
})
export class CategoryListTableComponent implements OnInit {

    categories: CategoryInterface[] = [];

    constructor(private categoryService: CategoryService) {
    }

    ngOnInit(): void {
        this.loadCategories();
    }

    loadCategories(): void {
        this.categoryService.loadData().subscribe((result) => {
            this.categories = result;
        })
    }

}
