import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: '',
    title: '',
    price: 0,
    description: '',
    category: {
      id: 0,
      name: ''
    },
    images: []
  }
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

  public onShowProductDetail(): void {
    this.showProduct.emit(this.product.id);
  }

}
