import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productList: Product[];
  @Output() onProductSelected:EventEmitter<Product>;

  private currentProduct:Product;

  constructor() { 
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  clicked(product:Product):void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product:Product):boolean{
    if(!product || !this.currentProduct){
      return false;
    }
    return product.getSku === this.currentProduct.getSku;
  }

}