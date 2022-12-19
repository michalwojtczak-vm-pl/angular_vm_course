import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.scss']
})
export class CategoryDeleteComponent implements OnInit {

  constructor(
      private activatedRoute: ActivatedRoute,
      private categoryService: CategoryService,
      private router: Router,
  ) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.categoryService.deleteRecord(params['categoryId']);
    })

    this.router.navigateByUrl('/categories/list');
  }
}
