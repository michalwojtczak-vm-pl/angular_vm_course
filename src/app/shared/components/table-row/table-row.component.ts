import {Component, OnInit} from '@angular/core';
import {CategoryInterface} from "../../../modules/category/interfaces/category.interface";

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
  columns: string[] = [];
  dataTable:CategoryInterface[] = [];
  constructor() { }

  ngOnInit(): void {

  }

}
