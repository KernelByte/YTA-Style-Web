import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@product/product.component';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  produtSignal = signal<Product[]>([]);

  cart = signal<Product[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts()
      .subscribe({
        next: (products) => {
          this.produtSignal.set(products);
        },
        error: (error) => {
          //console.log(error);
        }
      });    
  }

  addToCart(newProduct: Product)
  {
    this.cartService.addToCart(newProduct);
  } 
}
