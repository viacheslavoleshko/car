import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {path} from "@angular-devkit/core";
import {Observable} from "rxjs";
import {Review} from "./models/Review";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
 path = 'https://car.hpcheck.co.uk';
  constructor(private http : HttpClient) { }
  leaveReview(review) {
    return this.http.post(this.path + '/leavereview', review);
  }

  getReviews(number) {
      let header = new HttpHeaders().set('number', number);
   return this.http.get(this.path + '/getreviews', {headers: header});
  }

}
