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
  regNumb;

  constructor(private carService: CarService,
    private router: Router, 
    private route : ActivatedRoute) {
      this.regNumb = this.route.snapshot.paramMap.get('regNumb');
      setTimeout(() => {
        this.carService.getMot(this.regNumb).subscribe(val => {
          this.mot = val['object'];
        })
      }, 500);
 }

 ngOnInit() {
  
 }

 toHome() {
  this.router.navigate(['/']);
  }


}
