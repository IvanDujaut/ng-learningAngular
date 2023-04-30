import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model'
import { log } from 'console';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public myCart: Product[] = [];
  public total = 0;

  public products: Product[] = [
    {
      id: '1',
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product: Product) {
    console.log(product);
    this.myCart.push(product);
    this.total = this.myCart.reduce((sum, item) => sum + item.price, 0);
  }

}
