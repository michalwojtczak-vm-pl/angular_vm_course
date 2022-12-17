import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {HttpClient} from "@angular/common/http";
import {CategoryInterface} from "../../interfaces/category.interface";

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.scss']
})
export class CategoryDeleteComponent implements OnInit {

  category!: CategoryInterface;

  constructor(
      private activatedRoute: ActivatedRoute,
      private categoryService: CategoryService,
      private router: Router,
      private http: HttpClient,
  ) { }

  ngOnInit(): void {
    //this.categoryService.deleteRecord(this.categoryService.loadData());

    this.activatedRoute.params.subscribe((params) => {
      console.log(+params.categoryId)
      //this.loadData(+params.categoryId);
      this.categoryService.getData(+params.categoryId).subscribe((result) => {
        this.category = result;
        console.log(result);
        this.categoryService.deleteRecordById(result.id);
      })
    })
    this.router.navigateByUrl('/categories/list');

  }

}
