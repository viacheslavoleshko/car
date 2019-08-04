import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.page.html',
  styleUrls: ['./tax.page.scss'],
})
export class TaxPage implements OnInit {
// ['object'][0]['t']

  //  tax ={"Status bar":{"Status":"✓ Taxed","Tax due":"01 December 2019"},"Vehicle make":"MERCEDES","Date of first registration":"June 2008","Year of manufacture":"2008","Cylinder capacity (cc)":"1498 cc","CO₂Emissions":"148 g/km","Fuel type":"PETROL","Euro Status":"Not available","Export marker":"No","Vehicle status":"Tax not due","Vehicle colour":"SILVER","Vehicle type approval":"M1","Wheelplan":"2-AXLE-RIGID BODY","Revenue weight":"1740kg"};
   tax = -1;
  
    constructor(private carService: CarService, private router: Router, private route : ActivatedRoute) {
      // this.carService.getTax(this.registration).subscribe(value => {
      //   this.tax = value;
      //   console.log(this.tax);
      // });
    }
  
    ngOnInit() {
    }
  
    
   

}
