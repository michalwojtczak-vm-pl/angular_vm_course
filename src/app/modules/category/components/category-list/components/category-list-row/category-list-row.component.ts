import {Component, Input, OnInit} from '@angular/core';
import {CategoryInterface} from "../../../../interfaces/category.interface";

@Component({
    selector: 'app-category-list-row',
    templateUrl: './category-list-row.component.html',
    styleUrls: ['./category-list-row.component.scss']
})
export class CategoryListRowComponent implements OnInit {

    @Input() category: CategoryInterface = {
        id: 0,
        subject: '',
        ISBN: ''
    };

    constructor() {
    }

    ngOnInit(): void {
    }

}
