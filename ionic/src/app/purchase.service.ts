import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";

let dhost;


@Injectable({
    providedIn: 'root'
})


export class PurchaseService {
   path = 'https://car.hpcheck.co.uk';
    //path = 'http://localhost';
    vdimap = new Map();
    numberVdi = '';
    showModal = false;
    url = '';
    stolen = new Map();
    product = 0;
    purchased = false;
    numberInInput = '';
    numberPurchase = 0;
    header: HttpHeaders = new HttpHeaders();
    constructor(public http: HttpClient, private cookie: CookieService) {
    }

    confirm(id, number, paymentIntent, product) {
        this.header = new HttpHeaders()
            .set('payment',id).set('number', number)
            .set('paymentIntent',paymentIntent )
            .set('product', product)
            .set('token', this.cookie.get('token'));
        return this.http.get(`${this.path}/confirm`, {headers: this.header});
    }
    getKey() {
        this.header = new HttpHeaders().set('token', this.cookie.get('token'));
        return this.http.get(`${this.path}/getkey`, {headers: this.header});
    }
}

