import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products: Product[] = [
    { id: 1111, name: 'Laptop', price: 500, used: false },
    { id: 2222, name: 'Phone', price: 300, used: true },
    { id: 3333, name: 'Headphones', price: 50, used: false },
    { id: 4444, name: 'Keyboard', price: 80, used: true }
  ];
}
