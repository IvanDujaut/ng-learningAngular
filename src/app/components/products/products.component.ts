import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public myShoppingCart: Product[] = [];
  public total = 0;
  public products: Product[] = [];
  public showProductDetail = false;
  public productChosen: Product = {
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

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getMyShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    console.log(product);
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotalPrice();
  }

  public toggleProductDetail(): void {
    this.showProductDetail = !this.showProductDetail;
  }

  public onShowProductDetail(id: string): void {
    this.productsService.getProductById(id)
    .subscribe((productDetails) => {
      console.log(productDetails);
      this.toggleProductDetail();
      this.productChosen = productDetails;
    })
  }
}
