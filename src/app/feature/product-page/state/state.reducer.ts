import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ProductActions from './state.actions';
import { ProductState } from './state.model';
export const statesFeatureKey = 'states';

export interface State extends EntityState<State> {
  // additional entities state properties
}

export const adapter: EntityAdapter<State> = createEntityAdapter<State>();
export const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
  selectedCategory: null,
};
export const ProductReducer = createReducer(
  initialState,

  // Load
    on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Load single product
  on(ProductActions.loadProductById, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.loadProductByIdSuccess, (state, { product }) => ({
    ...state,
    selectedProduct: product,
    loading: false,
  })),
  on(ProductActions.loadProductByIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
   on(ProductActions.setCategory, (state, { category }) => ({
    ...state,
    selectedCategory: category,
  }))
);


