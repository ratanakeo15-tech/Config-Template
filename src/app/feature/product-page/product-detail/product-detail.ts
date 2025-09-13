import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItem } from '../model/product-item';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
    @Input() product!: ProductItem;
  @Output() back = new EventEmitter<void>();

  goBack() {
    this.back.emit();
  }
}
