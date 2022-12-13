import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoryInterface} from '../interfaces/category.interface';

@Injectable()
export class CategoryService {
    constructor(
        private http: HttpClient
    ) {
    }

    loadData() {
        return this.http.get<CategoryInterface[]>('/api/categories');
    }
}