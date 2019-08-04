import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-mot',
  templateUrl: './mot.page.html',
  styleUrls: ['./mot.page.scss'],
})
export class MotPage implements OnInit {
  //['object'][0]['m']

  mot = -1;
  // mot = {"registration":"LB08VEX","make":"MERCEDES-BENZ","model":"A","firstUsedDate":"2008.06.18","fuelType":"Petrol","primaryColour":"Silver","vehicleId":"Ak2Fn-y7_A38GaM7Bfd1fw==","registrationDate":"2008.06.18","manufactureDate":"2008.06.18","engineSize":"1498","motTests":[{"completedDate":"2019.06.13 13:55:21","testResult":"PASSED","expiryDate":"2020.06.12","odometerValue":"63175","odometerUnit":"mi","motTestNumber":"447574153271","odometerResultType":"READ","rfrAndComments":[]},{"completedDate":"2017.08.25 08:45:38","testResult":"PASSED","expiryDate":"2018.08.24","odometerValue":"61709","odometerUnit":"mi","motTestNumber":"623253248603","odometerResultType":"READ","rfrAndComments":[]},{"completedDate":"2016.08.25 13:05:06","testResult":"PASSED","expiryDate":"2017.08.24","odometerValue":"58632","odometerUnit":"mi","motTestNumber":"989845747690","odometerResultType":"READ","rfrAndComments":[]},{"completedDate":"2016.08.24 11:50:37","testResult":"FAILED","odometerValue":"58629","odometerUnit":"mi","motTestNumber":"179312693672","odometerResultType":"READ","rfrAndComments":[{"text":"Offside Rear Seat belt locking mechanism does not secure or release (5.2.5a)","type":"FAIL","dangerous":false}]},{"completedDate":"2015.08.12 16:07:57","testResult":"PASSED","expiryDate":"2016.08.11","odometerValue":"54745","odometerUnit":"mi","motTestNumber":"969524325201","odometerResultType":"READ","rfrAndComments":[{"text":"Rear Parking brake lever has little reserve travel (3.1.6b)","type":"ADVISORY","dangerous":false},{"text":"Under-trays fitted obscuring some underside components","type":"USER ENTERED","dangerous":false}]},{"completedDate":"2014.05.29 14:21:02","testResult":"PASSED","expiryDate":"2015.05.28","odometerValue":"50622","odometerUnit":"mi","motTestNumber":"939669044129","odometerResultType":"READ","rfrAndComments":[]},{"completedDate":"2012.06.25 13:19:13","testResult":"PASSED","expiryDate":"2013.06.24","odometerValue":"49032","odometerUnit":"mi","motTestNumber":"285997972190","odometerResultType":"READ","rfrAndComments":[{"text":"Nearside Inner Front suspension has slight movement at a wishbone pin or bush (2.5.A.1c)","type":"ADVISORY","dangerous":false},{"text":"Offside Inner Front suspension has slight movement at a wishbone pin or bush (2.5.A.1c)","type":"ADVISORY","dangerous":false}]},{"completedDate":"2012.06.25 13:19:13","testResult":"FAILED","odometerValue":"49032","odometerUnit":"mi","motTestNumber":"706057872129","odometerResultType":"READ","rfrAndComments":[{"text":"Offside Stop lamp not working (1.2.1b)","type":"PRS","dangerous":false},{"text":"Nearside Inner Front suspension has slight movement at a wishbone pin or bush (2.5.A.1c)","type":"ADVISORY","dangerous":false},{"text":"Offside Inner Front suspension has slight movement at a wishbone pin or bush (2.5.A.1c)","type":"ADVISORY","dangerous":false}]},{"completedDate":"2011.06.23 15:30:07","testResult":"PASSED","expiryDate":"2012.06.22","odometerValue":"44020","odometerUnit":"mi","motTestNumber":"969564471146","odometerResultType":"READ","rfrAndComments":[]}]};
 registration;

  constructor(private carService: CarService, private router: Router, private route : ActivatedRoute) {
  }

  ngOnInit() {}
  
  getCar() {
  //   this.carService.getMot(this.registration).subscribe(value => {
  //     this.mot = value;
  //     console.log(this.mot);
  //   });
  }

  Taxed() {
    this.router.navigateByUrl('/taxed')
  }


}
