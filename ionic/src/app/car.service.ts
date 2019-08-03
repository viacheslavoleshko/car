import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  basepath = 'http://car.nix.ltd';
  
  constructor(private http : HttpClient) { }

  getTax() {
    return this.http.get(`${this.basepath}/tax/LB08VEX`);

    // return this.http.get(`https://api.nix.ltd/api/v1/postcode/LS`);
    // this.nativeHttp.get(`api/tax/LB08VEX`, {}, {})
    // .then( res => res);
  }

  getMot() {
    return this.http.get(`${this.basepath}/mot/LB08VEX`);
    // this.nativeHttp.get(`${this.basepath}/mot/LB08VEX`, {}, {})
    // .then( res => res);
  }

}
