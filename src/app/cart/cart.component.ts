import { Component, OnInit } from "@angular/core";
import { CartService } from "../Services/cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(data) {
    this.items = this.cartService.clearItems();
    this.checkoutForm.reset();
    window.alert("form submitted successfully");
    console.warn("form submitted successfully with data:" , data);
  }
}
