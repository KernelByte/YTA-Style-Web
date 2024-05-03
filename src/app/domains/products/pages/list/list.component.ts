import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@product/product.component';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent,HeaderComponent,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  produtSignal = signal<Product[]>([]);
  categorySignal = signal<Category[]>([]);

  cart = signal<Product[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  ngOnInit() {
    this.getProducts();  
    this.getCategories();
  }

  addToCart(newProduct: Product)
  {
    this.cartService.addToCart(newProduct);
  }
  
  private getProducts(){
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

  private getCategories(){
    this.categoryService.getCategories()
      .subscribe({
        next: (data) => {
          this.categorySignal.set(data);
        },
        error: (error) => {
          //console.log(error);
        }
      });
  }
  
}
