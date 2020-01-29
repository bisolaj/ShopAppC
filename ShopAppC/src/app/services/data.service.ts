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
      price: 'View in Cart 1'
    },
    {
      id: '2',
      pName: 'Ninja Stars 2',
      pNameURL: 'NinjaStars2',
      pDesc: 'Paper Ninja Star 2',
      additionalInfo: 'May Cause Paper Cuts 2',
      price: 'View in Cart 2'
    },

    {
      id: '3',
      pName: 'Ninja Stars 3',
      pNameURL: 'NinjaStars 3',
      pDesc: 'Paper Ninja Star 3',
      additionalInfo: 'May Cause Paper Cuts 3',
      price: 'View in Cart 3'
    }

  ]


  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }

  addToCart(cartItem: Product)
  {
    
    this.itemsInCart.push(cartItem);
    console.log(this.itemsInCart);
  }

  getCartItems(): Product[] {
    return this.itemsInCart;
  }
}
