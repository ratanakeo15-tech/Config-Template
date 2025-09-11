import {
  ChangeDetectionStrategy,
  Component,
  signal,
  OnInit,
  inject,
  computed,
  model,
} from '@angular/core';

import { ActivatedRoute, RouterLink, NavigationEnd } from '@angular/router';
import * as ProductActions from './state/state.actions';
import { filter, single } from 'rxjs/operators';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ProductService } from './service/product-service';
import { ProductItem } from './model/product-item';
import * as ProductSelectors from './state/state.selectors';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-product-page',
  imports: [
      MatSelectModule ,
      MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    AsyncPipe
  ],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPage implements OnInit {

  products$!: Observable<ProductItem[]>;
  selectedProduct$!: Observable<ProductItem | null>;
  loading$!: Observable<boolean>;
    category$!: Observable<string | null>;


  constructor(private store: Store) {}

  ngOnInit(): void {

    

    this.products$ = this.store.select(ProductSelectors.selectAllProducts)
        this.category$ = this.store.select(ProductSelectors.selectSelectedCategory);
    // // Load all products when page loads
    this.store.dispatch(ProductActions.loadProducts());

    // this.selectedProduct$ = this.store.select(ProductSelectors.selectSelectedProduct);
    // this.loading$ = this.store.select(ProductSelectors.selectProductLoading);

    

    // // Example: Load single product by id
    // this.store.dispatch(ProductActions.loadProductById({ id: 1 }));

    // console.log('Store is:', this.store);
  }
   filterByCategory(category: string) {
    this.store.dispatch(ProductActions.setCategory({ category }));
  }
  

}
