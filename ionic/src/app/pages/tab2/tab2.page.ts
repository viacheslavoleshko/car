import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../../car.service';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  regNumb;

  constructor(private carService: CarService, private router: Router) {
  }

  ngOnInit() {
  }

  toTaxDetails() {
    this.router.navigate(['tax-details', `${this.regNumb}`]);
  }

}
