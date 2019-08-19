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
    stolen =  new Map();
    constructor(public http: HttpClient) {
    }

    confirm(id, regNumb, paymentIntent) {
        let headers = new HttpHeaders().set('token',id).set('regNumb', regNumb).set('paymentIntent',paymentIntent );
        return this.http.get('http://localhost/confirm', {headers: headers});
    }

}
