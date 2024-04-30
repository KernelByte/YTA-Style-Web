import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import {ReversePipe} from '@shared/pipes/reverse.pipe';
import {TimeAgoPipe} from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, UpperCasePipe,ReversePipe,TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  //img: string = 'https://picsum.photos/640/640?r=' + Math.random().toString();

  @Input({required: true}) product!: Product;

  @Output() addToCart = new EventEmitter(); // Hijo hacia el padre

  addToCartHandler() {
    this.addToCart.emit(this.product);
  }

}
