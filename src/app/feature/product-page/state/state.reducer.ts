import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ProductState } from '../model/product-item';
import * as ProductActions from './state.actions';
export const statesFeatureKey = 'states';

export interface State extends EntityState<State> {
  // additional entities state properties
}

export const adapter: EntityAdapter<State> = createEntityAdapter<State>();
export const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};
export const ProductReducer = createReducer(
  initialState,

  on(ProductActions.loadproductItems, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.loadProductItemsSucess, (state, { items }) => ({
    ...state,
    items,
    loading: false,
  })),
  on(ProductActions.loadProductItemsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Add
  on(ProductActions.addProductItem , state => ({
    ...state,
    loading: true,
  })),
  on(ProductActions.addProductItemSuccess , (state, { item }) => ({
    ...state,
    items: [...state.items, item],
    loading: false,
  })),
  on(ProductActions.loadProductItemsFailure , (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);


