import { HttpResource } from "../../shared/resource/http-resource";
import { Injectable } from "@angular/core";
import { Products } from "../models/products";
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class ProductService {
    
private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private resource: HttpResource<Products>) {}

  getProducts(): Observable<Products[]> {
    return this.resource.getAll(this.baseUrl);
  }

  getProduct(id: number): Observable<Products> {
    return this.resource.getOne(this.baseUrl, id);
  }
}
