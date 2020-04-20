import { Component, OnInit } from '@angular/core';
import {CartService} from '../Services/cart.service'
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingRates;
  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.shippingRates=this.cartService.getShippingRates();
  }

}