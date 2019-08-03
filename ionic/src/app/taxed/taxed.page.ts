import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../car.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taxed',
  templateUrl: './taxed.page.html',
  styleUrls: ['./taxed.page.scss'],
})
export class TaxedPage implements OnInit {
  tax;

  constructor(private carService: CarService, private router: Router, private route : ActivatedRoute) {
    this.carService.getTax(this.registration).subscribe(value => {
      this.tax = value;
      console.log(this.tax);
    });
  }

  ngOnInit() {
  }

  
 Home() {
  this.router.navigateByUrl('/')
}

}
