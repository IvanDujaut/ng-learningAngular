import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);
  public myCart$ = this.myCart.asObservable(); //e; $ indica que es un observable

  constructor() { }

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart); // envio notif a los componentes que se suscriban a este metodo
  }

  getMyShoppingCart(): Product[] {
    return this.myShoppingCart;
  }

  getTotalPrice(): number {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
