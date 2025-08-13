import { ChangeDetectionStrategy, Component, signal,OnInit } from '@angular/core';
import { Products } from '../../core/models/products';
import { ActivatedRoute, RouterLink,NavigationEnd } from '@angular/router';
import { ProductService } from '../../core/service/product-service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-product-page',
  imports: [RouterLink],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPage implements OnInit {
 
    showAllProductHeader = false;
  protected products = signal<Products[]>([]);
  id=signal('');
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  //use for cuting your text
  truncateText(text: string, maxLength: number = 200): string {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }
  ngOnInit(): void {
    //this code is for you don't need to check condition with ID
  //   this.route.params.subscribe(params => {
  //     const id = params['id'] || '';
  //     if (id) {
        
  //       this.productService.getProduct(+id).subscribe(product => {
  //         this.products.set([product]); 
  //       });
  //     } else {
        
  //       this.productService.getProducts().subscribe(products => {
  //         this.products.set(products);
         
         
  //       });
  //     }
  //   });
  // }

   //this code is for you need to check condition with ID
    // Subscribe so it reacts if params change
    this.route.params.subscribe((params) => {
      this.id.set(params['id'] || '');
      if (this.id()) {
        // Fetch single product
        //if you have problem in display data please go to check your product that it's under array or not
        this.productService.getProduct(+this.id()).subscribe((product) => {
          //this.products=this.products;
          this.products.set([product]);
        });
      } else {
        // Fetch all products
        this.productService.getProducts().subscribe((products) => {
          this.products.set(products);
        });
      }
    }
    
  );
  }
 
}
