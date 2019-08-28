import { Component, OnInit } from '@angular/core';
import { CarService } from '../../car.service';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  public cars: any;

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.carService.getLowTax().subscribe((result) => {
      this.cars = result['object'];
    });
  }
}
