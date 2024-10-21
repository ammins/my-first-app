import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PserviceService {

  constructor(private http:HttpClient) { }


  getProductList() {
    return this.http.get<any>('https://localhost:7240/api/Product/GetProductList')
  }
}
