import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

let dhost;


@Injectable({
    providedIn: 'root'
})


export class PurchaseService {

    vdi = null;

    constructor(public http: HttpClient) {
    }

    confirm(id, regNumb) {
        //let headers = {"token": id, "regNumb": regNumb };
        let headers = new HttpHeaders().set('token',id).set('regNumb', regNumb);
        return this.http.get('http://localhost/confirm', {headers: headers});
    }


}
