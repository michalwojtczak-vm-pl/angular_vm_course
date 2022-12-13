import { Component, OnInit } from '@angular/core';
import {CategoryInterface} from "../../../modules/category/interfaces/category.interface";
import {CategoryService} from "../../../modules/category/services/category.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  columns: string[] = [];
  tableData: CategoryInterface[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.columns = this.categoryService.getColumns();
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.loadData().subscribe((result) => {
      this.tableData = result;
    })
  }

}
