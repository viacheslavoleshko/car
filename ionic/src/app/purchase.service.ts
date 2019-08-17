import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

let dhost;


@Injectable({
    providedIn: 'root'
})


export class PurchaseService {
    vdimap = new Map();
    numberVdi = '';
    constructor(public http: HttpClient) {
    }

    confirm(id, regNumb, paymentIntent) {
        let headers = new HttpHeaders().set('token',id).set('regNumb', regNumb).set('paymentIntent',paymentIntent );
        return this.http.get('https://car.nix.ltd/confirm', {headers: headers});
    }

}
