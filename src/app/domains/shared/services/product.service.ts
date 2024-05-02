import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

  // Obtener los productos de la API
  getProducts(){
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }

    // Obtener un solo producto de la API
    getOnlyProduct(id: string){
      return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);
    }
}
