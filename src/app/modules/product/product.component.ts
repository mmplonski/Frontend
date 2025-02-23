import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './model/product';
import { Page } from 'src/app/shared/model/page';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  page!: Page<Product>;

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.getProductPage(0, 10);
  }

  onPageEvent(event: PageEvent){
    this.getProductPage(event.pageIndex, event.pageSize);
  }

  private getProductPage(page: number, size: number) {
    this.productService.getProducts(page, size)
      .subscribe(page => this.page = page);
  }
}
