import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Mot, Object} from "./models/Mot";
@Injectable({
  providedIn: 'root'
})
export class CarService {
  basepath = 'https://car.hpcheck.co.uk';
  //basepath = 'http://localhost';

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
  getCo(registration) {
    return this.http.get(`${this.basepath}/co/${registration}`);
  }
  getStolen(registration) {
    return this.http.get(`${this.basepath}/stolen/${registration}`);
  }
  getRecalls(registration) {
    return this.http.get(`${this.basepath}/recall/${registration}`);
  }
  getLowTax() {
    return this.http.get(`${this.basepath}/lowtax`);
  }
  getRecallsInYears(make) {
    return this.http.get(`${this.basepath}/recallsformake/${make}`)
  }
}
