import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-book-list-table-row]',
  templateUrl: './book-list-table-row.component.html',
  styleUrls: ['./book-list-table-row.component.scss']
})
export class BookListTableRowComponent implements OnInit {
  @Input() public id!: number;
  @Input() public title: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
