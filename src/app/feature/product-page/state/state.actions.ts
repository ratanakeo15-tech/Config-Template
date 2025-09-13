import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ProductItem } from '../model/product-item';
export const clearSelectedProduct = createAction('[Product] Clear Selected Product');

export const loadProducts = createAction('[Product] Load Products');
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: ProductItem[] }>()
);
export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: string }>()
);

// Load product by ID
export const loadProductById = createAction(
  '[Product] Load Product By Id',
  props<{ id: number }>()
);
export const loadProductByIdSuccess = createAction(
  '[Product] Load Product By Id Success',
  props<{ product: ProductItem }>()
);
export const loadProductByIdFailure = createAction(
  '[Product] Load Product By Id Failure',
  props<{ error: number }>()
);

export const loadProductsByCategory = createAction(
  '[Product Page] Load Products By Category',
  props<{ category: string }>()
);

export const loadProductsByCategorySuccess = createAction(
  '[Product API] Load Products By Category Success',
  props<{ products: ProductItem[] }>()
);
export const loadProductsByCategoryFailure = createAction(
  '[Product] Load Product By Id Failure',
  props<{ error: number }>()
);