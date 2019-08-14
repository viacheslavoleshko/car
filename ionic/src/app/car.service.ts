import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Mot, Object} from "./models/Mot";
@Injectable({
  providedIn: 'root'
})
export class CarService {
  basepath = 'https://car.nix.ltd';
  
  constructor(private http : HttpClient) { }

  getTax(registration) {
    return this.http.get(`${this.basepath}/tax/${registration}`);
  }

  getMot(registration) {
    return this.http.get(`${this.basepath}/mot/${registration}`);
  }
  getVdi(registration) {
    return this.http.get(`${this.basepath}/vdi/${registration}`);
  }
  getDvla(registration) {
    return this.http.get(`${this.basepath}/dvla/${registration}`);
  }
}
