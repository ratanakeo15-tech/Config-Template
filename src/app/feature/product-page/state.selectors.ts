import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './model/product-item';

export const selectComplianceState =
  createFeatureSelector<ProductState>('compliance');

export const selectProductItems = createSelector(
  selectComplianceState,
  state => state.items
);

export const selectproductLoading = createSelector(
  selectComplianceState,
  state => state.loading
);

export const selectProductError = createSelector(
  selectComplianceState,
  state => state.error
);
