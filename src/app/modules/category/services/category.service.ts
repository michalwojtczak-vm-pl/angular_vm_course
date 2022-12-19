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
        let cat = this.findCategory(category.id);
        if (cat) {
            cat.subject = category.subject;
            cat.ISBN = category.ISBN;
        }
    }

    delete(id: number) {
        // return this.http.delete<CategoryInterface>(`/api/categories/${id}`); //gdyby mockserver był skonfigurowany
        return this.http.delete<CategoryInterface>(`/api/categories/`);
    }

    deleteCategory(id: number) {
        let cat = this.findCategory(id);
        if(cat) {
            const index = this.categories.indexOf(cat);
            this.categories.splice(index, 1);
        }
    }

    private findCategory(id: number) {
        return this.categories.find((c) => +c.id === +id);
    }
}