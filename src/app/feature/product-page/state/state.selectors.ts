import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './state.model';


export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductState,
  // items from product state model 
  (state) => state.products
);

export const selectSelectedProduct = createSelector(
  selectProductState,
  // items from selectProduct state model 
  (state) => state.selectedProduct
);

export const selectProductLoading = createSelector(
  selectProductState,
  (state) => state.loading
);

export const selectProductError = createSelector(
  selectProductState,
  (state) => state.error
);
export const selectSelectedCategory = createSelector(
  selectProductState,
  (state) => state.selectedCategory
);

export const selectFilteredProducts = createSelector(
  selectAllProducts,
  selectSelectedCategory,
  (products, category) => {
    if (!category) return products;
    return products.filter((p) => p.category === category);
  }
);