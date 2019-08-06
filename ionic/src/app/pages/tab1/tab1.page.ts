import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  regNumb;
  constructor(private router: Router) {
 }

 ngOnInit() {}

 toDetails() {
  this.router.navigate(['mot-details', `${this.regNumb}`]);
  }
}
