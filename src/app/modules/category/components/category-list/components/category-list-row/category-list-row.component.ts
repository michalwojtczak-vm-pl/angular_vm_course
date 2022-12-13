import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-list-row',
  templateUrl: './category-list-row.component.html',
  styleUrls: ['./category-list-row.component.scss']
})
export class CategoryListRowComponent implements OnInit {

  @Input() catego: any;
  columns: string[] = ["id", "ISBN", "subject"];

  constructor() { }

  ngOnInit(): void {
  }

}
