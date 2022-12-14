import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { CategoryInterface } from '../../interfaces/category.interface';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { CategorySubsService } from '../../services/category-subs.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit, OnDestroy {

  category!: CategoryInterface;
  formCategory!: FormGroup;
  listSubs: Subscription[] = [];
  listSub!: Subscription;
  constructor(
      private activatedRoute: ActivatedRoute,
      private categoryService: CategoryService,
      private router: Router,
      private http: HttpClient,
      private categorySubService: CategorySubsService
  ) { }

  emit() {
    this.categorySubService.emitDataChanged();
  }

  ngOnInit(): void {
    this.initForm();
    this.activatedRoute.params.subscribe((params) => {
      this.loadData(+params.categoryId);
    })
  }

  loadData(id: number) {
    this.listSubs.push(this.categoryService.getData(id).subscribe((result) => {
      this.category = result;
      this.formCategory.patchValue(this.category);
    }))

    this.listSub = this.categoryService.getData(id).subscribe((result) => {
      this.category = result;
      this.formCategory.patchValue(this.category);
    })
  }

  ngOnDestroy(): void {
    for (const sub of this.listSubs) {
      sub.unsubscribe();
    }

    this.listSub?.unsubscribe();
  }

  initForm() {
    this.formCategory = new FormGroup({
      subject: new FormControl(null, [Validators.required]),
      ISBN: new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  save() {
    if (!this.formCategory.valid) {
      return;
    }

    this.categoryService.create(this.formCategory).subscribe((result) => {
      const category = {
        ...this.category,
        ...this.formCategory.value
      };


      this.categoryService.updateRecord(category);
      this.router.navigateByUrl('/categories/list');
    })
  }
}
