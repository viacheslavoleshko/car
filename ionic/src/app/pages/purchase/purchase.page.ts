import { Component, OnInit } from '@angular/core';
import {PurchaseService} from "../../purchase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../car.service";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
})
export class PurchasePage implements OnInit {
  message = '';
  constructor( private purchaseServie: PurchaseService,
               private carService: CarService,
               private route: ActivatedRoute,
               private router: Router,
               private loadingController: LoadingController) { }
  stripe = Stripe('pk_test_DXtuhrwBCTqVo7v0OBaCzArG');

  card = null;
  elements = null;
  token = null;
  cardElement;
  regNumb;
  load;
  product = 0;
  async Submit() {
    if (this.product !== 0) {
      this.message = '';
      await this.loadingController.create({
        message: 'Please wait...'
      }).then((overlay) => {
        this.load = overlay;
        this.load.present();
      });
      const {paymentMethod, error} = await this.stripe.createPaymentMethod('card', this.cardElement);
      if (error) {
        this.loadingController.dismiss();
        console.log('ERROR' + error);
        this.message = 'Incorrect data';
      } else {
        console.log(paymentMethod);
        this.purchaseServie.confirm(paymentMethod.id, this.regNumb, '', this.product.toString()).subscribe((res) => {
          console.log(res);
          this.handleServerResponse(res);
        });
      }
    } else this.message = 'Select product'
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.regNumb = params['regNumb'];
    });
    this.purchaseServie.showModal = true;
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
      this.loadingController.dismiss();
      return;
    }
    if (response.error) {
      console.log('RESPONSE ERROR');
      this.loadingController.dismiss();
      this.message = response.error['jsonBody']['error']['message'];
    } else if (response.requires_action) {
      console.log('require');
      const { error: errorAction, paymentIntent } =
          await this.stripe.handleCardAction(response.payment_intent_client_secret);
      if (errorAction) {
        this.message = 'Fail authentication';
        console.log('ActionError');
        this.loadingController.dismiss();
      } else {
        this.purchaseServie.confirm('', this.regNumb, paymentIntent.id, this.product.toString()).subscribe((servereResponse) => {
        this.handleServerResponse(servereResponse);
        });
      }
    } else {
      console.log("handle  success");
         if (response['product'] === '2')
             this.tariffVdi();
         else
           this.tariffStolen();
    }
  }

  tariffVdi() {
    this.carService.getVdi(this.regNumb).subscribe((res) => {
      this.purchaseServie.vdimap.set(this.regNumb, res['object'][0]);
      this.purchaseServie.numberVdi = this.regNumb;
      this.carService.getStolen(this.regNumb).subscribe((stln) => {
        const stolen: string[] = stln['object'][0]['stolen'];
        this.purchaseServie.stolen.set(this.regNumb, stolen);
        this.loadingController.dismiss();
        this.router.navigate([this.purchaseServie.url]);
      });
    });
  }

  tariffStolen() {
    this.purchaseServie.numberVdi = this.regNumb;
    this.carService.getStolen(this.regNumb).subscribe((stln) => {
      const stolen: string[] = stln['object'][0]['stolen'];
      this.purchaseServie.stolen.set(this.regNumb, stolen);
      this.loadingController.dismiss();
      this.router.navigate([this.purchaseServie.url]);
    });
  }

  setCost(cost) {
    this.message = '';
    this.product = cost;

}

}
