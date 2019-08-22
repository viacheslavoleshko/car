import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

let dhost;


@Injectable({
    providedIn: 'root'
})


export class PurchaseService {
    vdimap = new Map();
    numberVdi = '';
    showModal = false;
    url = '';
    stolen = new Map();
    product = 0;
    purchased = false;
    numberInInput = '';
    constructor(public http: HttpClient) {
    }

    confirm(id, number, paymentIntent, product) {
        let headers = new HttpHeaders()
            .set('token',id).set('number', number)
            .set('paymentIntent',paymentIntent )
            .set('product', product);
        return this.http.get('https://car.hpcheck.co.uk/confirm', {headers: headers});
    }
}

