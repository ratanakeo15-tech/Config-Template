import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ProductService } from '../service/product-service';
import * as ProductActions from './state.actions';


@Injectable({providedIn: 'root'})
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private complianceService: ProductService
  ) {}

  loadComplianceItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadproductItems ),
      // mergeMap(() =>
      //   this.complianceService.getProducts().pipe(
      //     map(items =>
      //       ProductActions.addProductItemSuccess ({ items })
      //     ),
      //     catchError(error =>
      //       of(ProductActions.loadProductItemsFailure ({ error }))
      //     )
      //   )
      // )
    )
  );

  addComplianceItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.addProductItem),
      // mergeMap(action =>
      //   this.complianceService.getProduct (action.item).pipe(
      //     map(item => ComplianceActions.addComplianceItemSuccess({ item })),
      //     catchError(error =>
      //       of(ComplianceActions.addComplianceItemFailure({ error }))
      //     )
      //   )
      // )
    )
  );
}
