import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-mot-details',
  templateUrl: './mot-details.page.html',
  styleUrls: ['./mot-details.page.scss'],
})
export class MotDetailsPage implements OnInit {

  mot;
  tax;
  regNumb;

  constructor(private carService: CarService,
    private router: Router, 
    private route : ActivatedRoute) {
      this.regNumb = this.route.snapshot.paramMap.get('regNumb');
      this.carService.getMot(this.regNumb).subscribe(val => {
        this.mot = val['object'];
        console.log(this.mot);
      console.log(this.mot[0]['m']['motTests'], '-------==---------=')
  
      });
      this.carService.getTax(this.regNumb).subscribe(val => {
        this.tax = val['object'];
      });
 }

 ngOnInit() {
  
 }

 toHome() {
  this.router.navigate(['/']);
  }


}
