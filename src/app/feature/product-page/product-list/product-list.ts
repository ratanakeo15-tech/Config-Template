import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItem } from '../model/product-item';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-list',
  imports: [
     MatProgressSpinnerModule,
        MatCardModule,
        MatSelectModule,
        MatFormFieldModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Input() products: ProductItem[] | null = [];
  @Input ()  relatedProducts: ProductItem[] | null = [];
  @Output() selectProduct = new EventEmitter<number>();
    @Output() categoryChange = new EventEmitter<string | null>();
  selectedCategory: string | null = null;

  onSelect(productId: number) {
    this.selectProduct.emit(productId);
  }
  //   onCategoryChange(event: any) {
  //   const category = event.target.value || null;
  //   this.selectedCategory = category;
  //   this.categoryChange.emit(category);
  // }
}
