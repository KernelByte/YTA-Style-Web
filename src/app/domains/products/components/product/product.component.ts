import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  //img: string = 'https://picsum.photos/640/640?r=' + Math.random().toString();

  @Input({required: true}) product!: Product;

  @Output() addToCart = new EventEmitter(); // Hijo hacia el padre

  addToCartHandler() {
    console.log('click form child');
    this.addToCart.emit('Hola este es un mensaje desde el hijo '+this.product.title);
  }

}
