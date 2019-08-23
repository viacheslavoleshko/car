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
  type = '';
  star;
  error = '';
  constructor(private carService: CarService,
              private activatedRoute: ActivatedRoute,
              private reviewService: ReviewService,
              private alertController: AlertController) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.regNumb = params['regNumb'];
    })
    setTimeout(() => {
      this.rate(4);
    },100);
  }

   leaveReview(form: NgForm) {
    this.error = '';
     if (this.regNumb !== '' && this.regNumb !== undefined) {
       if (this.type !== '') {
         if (form.value.message !== '') {
           let review: Review = new Review(this.regNumb, form.value.message, this.star, this.type);
           this.reviewService.leaveReview(review).subscribe((res) => {
             if (res['error']) {
               this.error = res['error'];
             } else {
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

  setType(msg: string) {
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
}
