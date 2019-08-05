import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../../car.service';

@Component({
  selector: "app-tax-details",
  templateUrl: "./tax-details.page.html",
  styleUrls: ["./tax-details.page.scss"]
})
export class TaxDetailsPage implements OnInit {
  tax;
  regNumb;

 
  constructor(private carService: CarService,
    private router: Router, 
    private route : ActivatedRoute) {
      this.regNumb = this.route.snapshot.paramMap.get('regNumb');
      setTimeout(() => {
        this.carService.getTax(this.regNumb).subscribe(val => {
          this.tax = val['object'];
        })
      }, 500);
    }
  ngOnInit() {}

  toHome() {
    this.router.navigate(["tabs/tab2"]);
  }
}
