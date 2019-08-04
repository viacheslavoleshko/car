import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../car.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taxed',
  templateUrl: './taxed.page.html',
  styleUrls: ['./taxed.page.scss'],
})
export class TaxedPage implements OnInit {

  constructor(private carService: CarService, private router: Router, private route : ActivatedRoute) {
  }

  ngOnInit() {
  }

}
