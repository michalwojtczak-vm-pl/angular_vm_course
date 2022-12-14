import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';
import { CategorySubsService } from '../../services/category-subs.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  formCategory!: FormGroup;
  constructor(
      private categoryService: CategoryService,
      private router: Router,
      private categorySubService: CategorySubsService
  ) { }

  ngOnInit(): void {
    this.initForm();

    console.log('Zaczynam obserwować rzeczke z create')
    this.categorySubService.dataChangedSub().subscribe((result) => {
      console.log('przyszło w create o wartości ', result)
    })
  }

  initForm() {
    this.formCategory = new FormGroup({
      subject: new FormControl(null, [Validators.required]),
      ISBN: new FormControl(null, [Validators.required, Validators.minLength(10)])
    })

    // this.formCategory.valueChanges.subscribe((result) => {
    //   console.log('dane w formularzu się zmieniły', result)
    // })
    this.formCategory.get('subject')?.valueChanges.subscribe((result) => {
      console.log('dane w formularzu się zmieniły', result)
    })
  }

  save() {
    if (!this.formCategory.valid) {
      return;
    }

    this.categoryService.create(this.formCategory).subscribe((result) => {
      this.categoryService.addRecord(this.formCategory.value);
      this.router.navigateByUrl('/categories/list');
    })
  }
}
