import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mot;
  tax;
  sitemaps;

  constructor(private carService: CarService) {
    this.carService.getMot().subscribe(value => {
      this.mot = value;
      console.log(this.mot);
    });
    this.carService.getTax().subscribe(value => {
      this.tax = value;
      console.log(this.tax);
    });

  }

}
