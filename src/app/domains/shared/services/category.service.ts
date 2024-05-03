import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);

  constructor() { }

    // Obtener los productos de la API
    getCategories(){
      return this.http.get<Category[]>('https://api.escuelajs.co/api/v1/categories');
    }
}
