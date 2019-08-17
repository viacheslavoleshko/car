import { Component, OnInit } from '@angular/core';
import {PurchaseService} from "../../purchase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tab1Page} from "../tab1/tab1.page";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
  providers:[Tab1Page]
})
export class PurchasePage implements OnInit {
  message = '';
  constructor( private purchaseServie: PurchaseService,
               private route: ActivatedRoute,
               private router: Router,
               private tabPage: Tab1Page) { }
  stripe = Stripe('pk_test_DXtuhrwBCTqVo7v0OBaCzArG');

  card = null;
  elements = null;
  token = null;
  cardElement;
  regNumb;
  async Submit() {
    this.message = '';
    const {paymentMethod, error} = await this.stripe.createPaymentMethod('card', this.cardElement);
    if (error) {
      console.log('ERROR' + error);
      this.message = 'Incorrect data';
    } else {
      console.log(paymentMethod);
      this.purchaseServie.confirm(paymentMethod.id, this.regNumb, '').subscribe((res) => {
        console.log(res);
        this.handleServerResponse(res);
    })};
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.regNumb = params['regNumb'];

    });
    this.elements = this.stripe.elements();
    this.cardElement = this.elements.create('card',{
      hidePostalCode: true,
      style: {
        base: {
          color: '#32325d',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '15px',
          '::placeholder': {
            color: '#aab7c4'
          }
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a'
        }
      }
      });
    this.cardElement.mount('#card-element');
  }

  async handleServerResponse(response) {
    if(response.NotFound) {
      this.message = response.NotFound;
      return;
    }
    if (response.error) {
      console.log('RESPONSE ERROR');
      this.message = response.error['jsonBody']['error']['message'];;
    } else if (response.requires_action) {
      // Use Stripe.js to handle required card action
      console.log('require');
      const { error: errorAction, paymentIntent } =
          await this.stripe.handleCardAction(response.payment_intent_client_secret);
      if (errorAction) {
        this.message = 'Fail authentication';
        console.log('ActionError');
      } else {
        // The card action has been handled
        // The PaymentIntent can be confirmed again on the server
        this.purchaseServie.confirm('', this.regNumb, paymentIntent.id).subscribe((servereResponse) => {
        this.handleServerResponse(servereResponse);
        });
      }
    } else {
      console.log("handle  success");
      this.purchaseServie.vdi = response;
      this.purchaseServie.numberVdi = this.regNumb;
      this.router.navigateByUrl('/vehicle/');
    }
  }
}

