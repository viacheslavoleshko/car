import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {path} from "@angular-devkit/core";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
 //path = 'http://localhost';
 path = 'https://car.hpcheck.co.uk';
  constructor(private http : HttpClient) { }
  leaveReview(review) {
    return this.http.post(this.path + '/leavereview', review);
  }

  getReviews() {
    this.http.get(this.path + '/getreviews');
  }
}
