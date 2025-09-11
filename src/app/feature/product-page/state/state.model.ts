import { ProductItem } from "../model/product-item";

export interface ProductState {
  products: ProductItem[];
  selectedProduct: ProductItem | null;
  loading: boolean;
  error: any;
   selectedCategory: string | null;   // ✅ add category filter
}
