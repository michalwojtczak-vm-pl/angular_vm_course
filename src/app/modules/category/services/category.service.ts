import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryInterface } from '../interfaces/category.interface';
import { FormGroup } from '@angular/forms';

@Injectable()
export class CategoryService {
    categories: CategoryInterface[] = [];
    constructor(
        private http: HttpClient
    ) {
    }

    loadData() {
        this.http.get<CategoryInterface[]>('/api/categories').subscribe((result) => {
            this.categories = result;
        });
    }

    loadDataPromise() {
        return new Promise((resolve) => {
            this.http.get<CategoryInterface[]>('/api/categories').subscribe((result) => {
                this.categories = [...result, ...result];
                return resolve(this.categories);
            });
        })
    }

    getData(id: number) {
        return this.http.get<CategoryInterface>(`/api/categories/${id}`);
    }

    create(form: FormGroup) {
        return this.http.post<CategoryInterface>('/api/categories', form.value);
    }

    update(id: number, form: FormGroup) {
        return this.http.patch<CategoryInterface>(`/api/categories/${id}`, form.value);
    }

    addRecord(category: CategoryInterface) {
        this.categories.push(category);
    }

    updateRecord(category: CategoryInterface) {
        let cat = this.categories.find((c) => +c.id === +category.id);
        if (cat) {
            cat.subject = category.subject;
            cat.ISBN = category.ISBN;
        }
    }
}