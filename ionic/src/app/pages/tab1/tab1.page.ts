import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CarService } from '../../car.service';
import {Object} from "../../models/Mot";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
    regNumb;
    obj: Object = new Object();
    tax;
    constructor(private router: Router,
                private carService: CarService,
                private route : ActivatedRoute,
                private navController: NavController) {
    }

    ngOnInit() {
        this.regNumb = this.route.snapshot.paramMap.get('regNumb');
        if(this.regNumb !== null)
        this.search();
    }

    search() {
        //this.router.navigate(['tabs/tab1', `${this.regNumb}`] );
        if (this.regNumb === '') {
            this.obj = undefined;
            this.tax = undefined;
        } else {
            this.carService.getMot(this.regNumb).subscribe((res) => {
                this.obj = res['object']['0'];
            });
            this.carService.getTax(this.regNumb).subscribe((res) => {
                this.tax = res['object']['0'];
            });
        }
    }

    showMotTests() {
        const motTests = document.getElementsByName('motTests');
        for (let i = 0; i < motTests.length; i++) {
            motTests[i].classList.toggle('hidden');
        }
        const txt = document.getElementById('arrow');
        if(txt.innerText === '▼') {
            txt.innerText = '►';
        } else {
            txt.innerText = '▼';
        }
    }
}
