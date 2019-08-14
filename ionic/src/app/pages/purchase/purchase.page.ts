import { Component, OnInit } from '@angular/core';
import {PurchaseService} from "../../purchase.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
})
export class PurchasePage implements OnInit {
  message = '';
  constructor( private purchaseServie: PurchaseService, private route: ActivatedRoute) { }
  stripe = Stripe('pk_test_DXtuhrwBCTqVo7v0OBaCzArG');
  cards = {
    number: '4242424242424242',
    expMonth: '12',
    expYear: '21',
    cvc: '123',
  };
  card = null;
  elements = null;
  token = null;
  clientSecret;
  cardElement;
  cardholderName;
  regNumb;
  async Submit() {
    this.message = '';
    const {paymentMethod, error} = await this.stripe.createPaymentMethod('card', this.cardElement);
    if (error) {
      console.log('ERROR' + error);
    } else {
      console.log(paymentMethod);
      this.purchaseServie.confirm(paymentMethod.id, this.regNumb).subscribe((res) => {
        console.log(res);
        this.handleServerResponse(res);
    })};
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.regNumb = params['regNumb'];

    });
    this.elements = this.stripe.elements();
    this.cardElement = this.elements.create('card');
    this.cardElement.mount('#card-element');
  }

  async handleServerResponse(response) {
    if (response.error) {
      // Show error from server on payment form
      console.log('response.error');
    } else if (response.requires_action) {
      // Use Stripe.js to handle required card action
      console.log('require');
      const { error: errorAction, paymentIntent } =
          await this.stripe.handleCardAction(response.payment_intent_client_secret);
      if (errorAction) {
        this.message = 'Err';
        console.log('ActionError');
      } else {
        // The card action has been handled
        // The PaymentIntent can be confirmed again on the server
        this.purchaseServie.confirm(paymentIntent.id, this.regNumb).subscribe((servereResponse) => {
        this.handleServerResponse(servereResponse);
        });
      }
    } else {
      //show in html
      this.message = 'SUCCESS';
      console.log("handle  success");
    }
  }
}

