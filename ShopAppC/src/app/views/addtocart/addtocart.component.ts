import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent implements OnInit {
  cartItems: Product[];
  itemsInCart: Product[];
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.cartItems = this.dService.getCartItems();
  }
removeCartItems()
{ 
  //call service to remove items from cart
    this.dService.emptyCart();
}
emptyCart()
{
  this.itemsInCart.length = 0;
}
removeItem(id: Product)
{
  //pass id to service 
  this.dService.removeItemFromCart(id);
}
}
