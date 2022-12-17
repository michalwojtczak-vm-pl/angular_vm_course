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

    delete(id: number) {
        return this.http.delete<CategoryInterface>(`/api/categories/${id}`);
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

    deleteRecordById(id : number) {
        for (let i = 0; i < this.categories.length; i++) {
            if (id === this.categories[i].id) {
                this.categories.splice(i,1);
                break;
            }
        }
    }
}