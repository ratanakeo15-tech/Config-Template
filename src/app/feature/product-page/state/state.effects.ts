import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ProductService } from '../service/product-service';
import * as ProductActions from './state.actions';


@Injectable()
export class ProductEffects {

  private  actions$ = inject(Actions);
  private productService = inject(ProductService);

  constructor(  
  ) {
     console.log('Actions is', this.actions$); 
  }

  loadProducts$= createEffect(() =>
    this.actions$?.pipe(
      ofType(ProductActions.loadProducts ),
       mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) =>
            ProductActions.loadProductsSuccess({ products })
          ),
          catchError((error) =>
            of(ProductActions.loadProductsFailure({ error: error.message }))
          )
        )
      )
    )
  );

   loadProductById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProductById),
      mergeMap(({ id }) =>
        this.productService.getProductById(id).pipe(
          map((product) =>
            ProductActions.loadProductByIdSuccess({ product })
          ),
          catchError((error) =>
            of(ProductActions.loadProductByIdFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
