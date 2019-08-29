import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {path} from "@angular-devkit/core";
import {Observable} from "rxjs";
import {Review} from "./models/Review";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
 path = 'https://car.hpcheck.co.uk';
 //path = 'http://localhost';
    header: HttpHeaders = new HttpHeaders();
  constructor(private http : HttpClient, private cookie: CookieService) { }
  leaveReview(review) {
      this.header = new HttpHeaders().set('token', this.cookie.get('token'));
    return this.http.post(this.path + '/leavereview', review, {headers: this.header});
  }

  getReviews(number) {
      this.header = new HttpHeaders().set('number', number).set('token', this.cookie.get('token'));
   return this.http.get(this.path + '/getreviews', {headers: this.header});
  }

}
