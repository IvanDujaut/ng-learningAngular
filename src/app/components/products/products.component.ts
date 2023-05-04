import { Component, OnInit } from '@angular/core';

import { Product, CreateProductDTO } from '../../models/product.model';
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
      name: '',
    },
    images: [],
  };

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

  public onAddToShoppingCart(product: Product) {
    console.log(product);
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotalPrice();
  }

  public toggleProductDetail(): void {
    this.showProductDetail = !this.showProductDetail;
  }

  public onShowProductDetail(id: string): void {
    this.productsService.getProductById(id).subscribe((productDetails) => {
      this.toggleProductDetail();
      this.productChosen = productDetails;
    });
  }

  public createNewProduct() {
    const product: CreateProductDTO = {
      title: 'New product created from dto',
      price: 1000,
      description: 'bla bla bla',
      images: ['https://placeimg.com/640/480/any'],
      categoryId: 2,
    };
    this.productsService.create(product)
    .subscribe(newProduct => {
      this.products.unshift(newProduct);
    })
  }
}
