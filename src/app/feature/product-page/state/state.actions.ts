import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ProductItem } from '../model/product-item';
import { State } from './state.model';
export const loadproductItems = createAction('[Compliance] Load Items');
export const loadProductItemsSucess = createAction(
  ' Load Items Success',
  props<{ items: ProductItem[] }>()
);
export const loadProductItemsFailure = createAction(
  ' Load Items Failure',
  props<{ error: any }>()
);
// Add product
export const addProductItem = createAction(
  ' Add Item',
  props<{ item: ProductItem }>()
);
export const addProductItemSuccess = createAction(
  '[Compliance] Add Item Success',
  props<{ item: ProductItem }>()
);
export const addProductItemFailure = createAction(
  '[Compliance] Add Item Failure',
  props<{ error: any }>()
);