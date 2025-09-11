export interface ProductItem {
    id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface ProductState {
  items: ProductItem[];
  loading: boolean;
  error: any;
}
