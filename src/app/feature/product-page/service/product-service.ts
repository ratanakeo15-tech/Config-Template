import { Injectable } from '@angular/core';
import { HttpResource } from '../../../shared/resource/http-resource';

import { Observable } from 'rxjs';
import { ProductItem } from '../model/product-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://fakestoreapi.com/products';
    // This uses Angular Dependency Injection to give your service a reusable HTTP helper called HttpResource.
    constructor(private resource: HttpResource<ProductItem>) {}
  //  Doesn’t run until you subscribe.
  // Once data comes back, your callback runs.
    getProducts(): Observable<ProductItem[]> {
      return this.resource.getAll(this.baseUrl);
    }
  
    getProduct(id: number): Observable<ProductItem> {
      return this.resource.getOne(this.baseUrl, id);
    }
    //  readonly allItems = this.getProducts();
    //  private readonly filterText = signal('');
    //  readonly filteredItems = computed(() => {
    //   let filtered = this.getProducts();
    //  });
  
}
