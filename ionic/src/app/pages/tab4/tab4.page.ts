import { Component, OnInit } from '@angular/core';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public inses: any;
  public img : any;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getIns().subscribe((result) => {
      this.inses = result['object'];
      this.img = 'assets/imgs/ins.png';
    });
  }

}
