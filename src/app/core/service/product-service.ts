import { HttpResource } from "../../shared/resource/http-resource";
import { Injectable } from "@angular/core";
import { Products } from "../models/products";
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class ProductService {
    
private baseUrl = 'https://fakestoreapi.com/products';
  // This uses Angular Dependency Injection to give your service a reusable HTTP helper called HttpResource.
  constructor(private resource: HttpResource<Products>) {}
//  Doesn’t run until you subscribe.
// Once data comes back, your callback runs.
  getProducts(): Observable<Products[]> {
    return this.resource.getAll(this.baseUrl);
  }

  getProduct(id: number): Observable<Products> {
    return this.resource.getOne(this.baseUrl, id);
  }
}
