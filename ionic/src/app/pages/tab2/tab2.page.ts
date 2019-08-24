import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../../car.service';
import {NgForm} from "@angular/forms";
import {Review} from "../../models/Review";
import {ReviewService} from "../../review.service";
import {AlertController} from "@ionic/angular";
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  regNumb = '';
  other = false;
  type = 0;
  star;
  error = '';
  reviews: Review[] = [];
  constructor(private carService: CarService,
              private activatedRoute: ActivatedRoute,
              private reviewService: ReviewService,
              private alertController: AlertController) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.regNumb = params['regNumb'];
    });
    setTimeout(() => {
      this.rate(4);
    },100);
    this.getReviews();
    this.setStars();
  }

   leaveReview(form: NgForm) {
    this.error = '';
     if (this.regNumb !== '' && this.regNumb !== undefined) {
       if (this.type !== 0) {
         if (form.value.message !== '') {
           let review: Review = new Review(this.regNumb, form.value.message, this.star, this.type);
           this.reviewService.leaveReview(review).subscribe((res) => {
             if (res['error']) {
               this.error = res['error'];
             } else {
               this.getReviews();
               this.setStars();
               this.presentAlert();
             }
           });
         } else {
           this.error = 'Enter your car review';
         }
       } else {
         this.error = 'Select Type';
       }
     } else this.error = 'Number not found';
   }

  rate(n: number) {
    const strars = document.getElementsByClassName('stars');
    for (let i = 0; i < n; i++) {
      strars[i].setAttribute('name', 'star');
    }
    for (let i = strars.length - 1; i >= n; i--) {
      strars[i].setAttribute('name', 'star-outline');
    }
    this.star = n;
  }

  setType(msg) {
    this.error = '';
    this.type = msg;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Review left',
      buttons: ['OK']
    });

    await alert.present();
  }
  getReviews() {
    this.reviewService.getReviews(this.regNumb).subscribe((res) => {
      this.reviews = res['reviews'];
      if(this.reviews)
      this.reviews = this.reviews.reverse();
    });
  }

  setStars() {
    setTimeout(() => {
      this.showStar(5);
      this.showStar(4);
      this.showStar(3);
      this.showStar(2);
      this.showStar(1);
    },500);
  }

  showStar(n) {
    const icon = '<ion-icon  color="warning" name="star"></ion-icon>';
    const strar = document.getElementsByClassName(`star${n}`);
    if (strar)
      for (let i = 0; i < strar.length; i++)
        strar[i].innerHTML = icon.repeat(n);
  }
}
