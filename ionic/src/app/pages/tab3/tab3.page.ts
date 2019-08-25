import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../../car.service';
import { Review } from "../../models/Review";
import { ReviewService } from "../../review.service";
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  public cars: any;

  constructor(private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private reviewService: ReviewService) {
  }

  ngOnInit() {
    this.carService.getLowTax().subscribe((result) => {
      this.cars = result['object'];
      console.log(this.cars);
    });
  }
}
