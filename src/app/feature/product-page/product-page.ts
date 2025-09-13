import {
  ChangeDetectionStrategy,
  Component,
  signal,
  OnInit,
  inject,
  computed,
  model,
  output,
  EventEmitter,
  Output
} from '@angular/core';

import {
  ActivatedRoute,
  RouterLink,
  NavigationEnd,
  Router,
} from '@angular/router';
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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { ProductList } from "./product-list/product-list";
import { ProductDetail } from "./product-detail/product-detail";
@Component({
  selector: 'app-product-page',
  imports: [
    // RouterLink,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    AsyncPipe,
    ProductList,
    ProductDetail
],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPage implements OnInit {
  products$!: Observable<ProductItem[]>;
  selectedProduct$!: Observable<ProductItem | null>;
  // loading$!: Observable<boolean>;
  // category$!: Observable<string | null>;
  relatedProducts$!: Observable<ProductItem[]>;
    // @Output() backClickbtn = new EventEmitter<void>();

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products$ = this.store.select(ProductSelectors.selectAllProducts);
    // this.category$ = this.store.select(ProductSelectors.selectSelectedCategory);
    this.relatedProducts$ = this.store.select(
      ProductSelectors.selectAllProducts
    );
    this.selectedProduct$ = this.store.select(
      ProductSelectors.selectSelectedProduct
    );

    // Debug: log all products
    // this.products$.subscribe(products => {
    //   console.log('🟢 All products:', products);
    // });
    // this.route.paramMap.subscribe((params) => {
    //   const id = params.get('id');
    //   console.log('Route id:', id);
    //   if (id) {
        // 👉 Load a single product
        // this.store.dispatch(ProductActions.loadProductById({ id: +id }));
      // } else {
      //   // 👉 Load all products

        this.store.dispatch(ProductActions.loadProducts());
      // }
    // });
  }
  viewProduct(id: number) {
    this.store.dispatch(ProductActions.loadProductById({ id }));
    this.router.navigate([`/products/${id}`]);
  }
 onSelectProduct(productId: number) {
    this.store.dispatch(ProductActions.loadProductById({ id: productId }));
  }

  protected onBack() : void {
      this.store.dispatch(ProductActions.clearSelectedProduct());
    this.router.navigate([`/products`]);
    //  this.router.navigate(['']);
    // this.backClickbtn.emit();
    //  console.log('jcbj');
  }
}
