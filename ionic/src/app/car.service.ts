import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  basepath = 'http://car.nix.ltd';
  
  constructor(private http : HttpClient) { }

  getTax(registration) {
    return this.http.get(`${this.basepath}/tax/${registration}`);
  }

  getMot(registration) {
    return this.http.get(`${this.basepath}/mot/${registration}`);
  }

}
