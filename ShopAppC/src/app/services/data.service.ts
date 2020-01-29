import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsInCart: Product[] = [];
  products: Product[] = 
  [
    {
      id: '1',
      pName: 'Ninja Stars 1',
      pNameURL: 'NinjaStars1',
      pDesc: 'Paper Ninja Star 1',
      additionalInfo: 'May Cause Paper Cuts 1',
      price: 'View in Cart 1',
      qty: 0
    },
    {
      id: '2',
      pName: 'Ninja Stars 2',
      pNameURL: 'NinjaStars2',
      pDesc: 'Paper Ninja Star 2',
      additionalInfo: 'May Cause Paper Cuts 2',
      price: 'View in Cart 2',
      qty: 0
    },

    {
      id: '3',
      pName: 'Ninja Stars 3',
      pNameURL: 'NinjaStars 3',
      pDesc: 'Paper Ninja Star 3',
      additionalInfo: 'May Cause Paper Cuts 3',
      price: 'View in Cart 3',
      qty: 0
    }

  ]


  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  addToCart(cartItem: Product)
  {
    if(!this.itemsInCart.includes(cartItem)) {
    cartItem.qty++;
    this.itemsInCart.push(cartItem);
    console.log(this.itemsInCart);
    }
    else
    {
        
    }

  }

  getCartItems(): Product[] {
    return this.itemsInCart;
  }
  emptyCart()
  {
    this.itemsInCart.length=0;

  }
  removeItemFromCart(id: Product)
  {
    //find the location of the product
    const index = this.findItemInCart(id);
    //perform a splice
    this.itemsInCart.splice(index,1);

  }

  findItemInCart(id: Product):number {
    //we are going to find the product in our cart
    return this.itemsInCart.indexOf(id);
    
  }
}
