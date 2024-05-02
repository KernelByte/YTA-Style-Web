import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { UpperCasePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [UpperCasePipe,CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');
  private productService = inject(ProductService);

  ngOnInit(){
    if (this.id){
      this.productService.getOnlyProduct(this.id)
      .subscribe({
        next: (product) => {
          this.product.set(product);
          if(product.images.length > 0){
            this.cover.set(product.images[0]);
          }
        }
      })
    }
  }

  changeCover(newImage: string){
    this.cover.set(newImage);
  }

}
