import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';

import { ProductItem } from '../model/product-item';

export const loadproductItems = createAction('[Compliance] Load Items');
export const loadProductItemsSucess = createAction(
  ' Load Items Success',
  props<{ items: ProductItem[] }>()
);
export const loadProductItemsFailure = createAction(
  ' Load Items Failure',
  props<{ error: any }>()
);

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