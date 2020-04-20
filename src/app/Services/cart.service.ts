import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private httpClient: HttpClient) {}
  items = [];
  addtoCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearItems() {
    this.items = [];
    return this.items;
  }
  getShippingRates() {
    
   var obj= this.httpClient.get('/assets/shipping.json');
   return obj;
  }
}
