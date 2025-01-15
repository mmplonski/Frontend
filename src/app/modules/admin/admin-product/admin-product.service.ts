import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminProduct } from './adminProducts';
import { HttpClient } from '@angular/common/http';
import { Page } from 'src/app/shared/model/page';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  constructor(private http: HttpClient) { }

  getProducts(page: number, size: number): Observable<Page<AdminProduct>> {
    return this.http.get<Page<AdminProduct>>(`/api/admin/products?page=${page}&size=${size}`)
  }
}
