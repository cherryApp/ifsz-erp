import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = "http://localhost:4000/product";

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  /**
   * Get one product for the form view.
   * @param id the id of product.
   */
  get(id: string | number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/${id}`);
  }

  update(product: Product): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/${product.id}`,
      product
    );
  }

  create(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  validate(name: string, product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/validate`, product);
  }
}
