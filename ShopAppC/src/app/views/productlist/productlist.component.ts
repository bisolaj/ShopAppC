import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  products: Product[] = [];

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.products = this.dService.getProducts();
    console.log(this.products);
  }
  addToCart(p: Product)
  {
     this.dService.addToCart(p);
     
  }

}
