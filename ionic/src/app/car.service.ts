import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";
import md5 from 'md5';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  basepath = 'https://car.hpcheck.co.uk';
  //basepath = 'http://localhost';
  header: HttpHeaders = new HttpHeaders();

  constructor(private http : HttpClient, private cookie: CookieService) { }

  getTax(registration) {
    this.header = new HttpHeaders().set('token', this.cookie.get('token'));
    return this.http.get(`${this.basepath}/tax/${registration}`, {headers: this.header});
  }
  getMot(registration) {
    this.header = new HttpHeaders().set('token', this.cookie.get('token'));
    return this.http.get(`${this.basepath}/mot/${registration}`, {headers: this.header});
  }
  getVdi(registration) {
    this.header = new HttpHeaders().set('token', this.cookie.get('token'));
    return this.http.get(`${this.basepath}/vdi/${registration}`,{headers: this.header});
  }
  getDvla(registration) {
    this.header = new HttpHeaders().set('token', this.cookie.get('token'));
    return this.http.get(`${this.basepath}/dvla/${registration}`,{headers: this.header});
  }
  getCo(registration) {
    this.header = new HttpHeaders().set('token', this.cookie.get('token'));
    return this.http.get(`${this.basepath}/co/${registration}`, {headers: this.header});
  }
  getStolen(registration) {
    this.header = new HttpHeaders().set('token', this.cookie.get('token'));
    return this.http.get(`${this.basepath}/stolen/${registration}`, {headers: this.header});
  }
  getRecalls(registration) {
    this.header = new HttpHeaders().set('token', this.cookie.get('token'));
    return this.http.get(`${this.basepath}/recall/${registration}`, {headers: this.header});
  }
  getLowTax() {
    this.header = new HttpHeaders().set('token', this.cookie.get('token'));
    return this.http.get(`${this.basepath}/lowtax`, {headers: this.header});
  }
  getIns() {
    this.header = new HttpHeaders().set('token', this.cookie.get('token'));
    return this.http.get(`${this.basepath}/ins`, {headers: this.header});
  }
  getRecallsInYears(make) {
    this.header = new HttpHeaders().set('token', this.cookie.get('token'));
    return this.http.get(`${this.basepath}/recallsformake/${make}`, {headers: this.header})
  }
  getEst(registration) {
    this.header = new HttpHeaders().set('token', this.cookie.get('token'));
    return this.http.get(`${this.basepath}/est/${registration}`, {headers: this.header});
  }

}
