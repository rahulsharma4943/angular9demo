import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products2";
import {CartService} from "../Services/cart.service"

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute, private cartService:CartService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
  }

   addtoCart(product)
    {
      this.cartService.addtoCart(product);
      window.alert("Product added to cart");
    }
}
