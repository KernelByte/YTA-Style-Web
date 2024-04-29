import { Component, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { Product } from './../../../shared/models/product.model';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from './../../../shared/components/header/header.component';

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

  constructor(){
    const initProducts: Product[] = [{
      id: Date.now(),
      title: 'Producto 1',
      price: 2000,
      image: 'https://picsum.photos/480/480?r=23',
      createAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 2',
      price: 3000,
      image: 'https://picsum.photos/480/480?r=24',
      createAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 3',
      price: 3000,
      image: 'https://picsum.photos/480/480?r=25',
      createAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 4',
      price: 3000,
      image: 'https://picsum.photos/480/480?r=26',
      createAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 5',
      price: 3000,
      image: 'https://picsum.photos/480/480?r=27',
      createAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 6',
      price: 3000,
      image: 'https://picsum.photos/480/480?r=28',
      createAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 7',
      price: 3000,
      image: 'https://picsum.photos/480/480?r=29',
      createAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 8',
      price: 3000,
      image: 'https://picsum.photos/480/480?r=30',
      createAt: new Date().toISOString()
    }];

    this.produtSignal.set(initProducts);
  }

  addToCart(newProduct: Product)
  {
    this.cart.update(prevState => [...prevState,newProduct]);
  } 
}
