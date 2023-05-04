import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Product, CreateProductDTO } from '../models/product.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl); //Fuerzo a que la peticion sea del tipo array de Product
  }

  getProductById(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  create(dto: CreateProductDTO): Observable<Product> { //porque necesito que sea un Observable para el post?
    return this.http.post<Product>(this.apiUrl, dto);
  }
}
