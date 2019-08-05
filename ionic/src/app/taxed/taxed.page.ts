import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../car.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taxed',
  templateUrl: './taxed.page.html',
  styleUrls: ['./taxed.page.scss'],
})
export class TaxedPage implements OnInit {
  registration;
  mot;

  constructor(private carService: CarService, private router: Router, private route : ActivatedRoute) {
  }

  ngOnInit() {
  }

  getCar() {
    this.carService.getMot(this.registration)
    .subscribe(val => {
      this.mot = val;
      console.log(val); 
    });
    this.carService.getTax(this.registration)
    .subscribe(val => console.log(val));
    console.log('click');
  }

  clickFunc() {
    console.log("click");
  }

}
