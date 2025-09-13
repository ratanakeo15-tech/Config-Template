import { computed, Injectable, signal } from '@angular/core';
import { HttpResource } from '../../../shared/resource/http-resource';

import { Observable } from 'rxjs';
import { ProductItem } from '../model/product-item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://fakestoreapi.com/products';
    // This uses Angular Dependency Injection to give your service a reusable HTTP helper called HttpResource.
    constructor(private http: HttpClient) {}
  //  Doesn’t run until you subscribe.
  // Once data comes back, your callback runs.
  getProducts(): Observable<ProductItem[]> {
    console.log('Testing');
    return this.http.get<ProductItem[]>(this.baseUrl);
  }

  getProductById(id: number): Observable<ProductItem> {
    return this.http.get<ProductItem>(`${this.baseUrl}/${id}`);
  }
    //  readonly allItems = this.getProducts();
    //  private readonly filterText = signal('');
    //  readonly filteredItems = computed(() => {
    //   let filtered = this.getProducts();
    //  });
//  private readonly filterDepartment = signal('');
//   readonly filterItem=computed(()=>{
//     let filtered = this.getProducts();
//         if (this.filterDepartment()) {
//       const branchToFilter = this.filterDepartment();
//       filtered = filtered.filter((item) =>
//         item.userInfo.id.includes(branchToFilter)
//       );
//     }
//   });


}
