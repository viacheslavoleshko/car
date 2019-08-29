import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {path} from "@angular-devkit/core";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient, private cookie: CookieService) { }
  path = 'https://car.hpcheck.co.uk';
  //path = 'http://localhost';
  header: HttpHeaders = new HttpHeaders();

  getHistory() {
    this.header = new HttpHeaders().set('token', this.cookie.get('token'));
    return this.http.get(`${this.path}/history`, {headers: this.header});
  }
}
