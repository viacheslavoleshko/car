import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { Router, ActivatedRoute } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 mot;
 registration;

  constructor(private carService: CarService, private router: Router, private route : ActivatedRoute) {}

  getCar() {
    this.carService.getMot(this.registration).subscribe(value => {
      this.mot = value;
      console.log(this.mot);
    });
  }

  Taxed() {
    this.router.navigateByUrl('/taxed')
  }

}
