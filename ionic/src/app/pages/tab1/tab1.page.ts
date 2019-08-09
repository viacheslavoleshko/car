import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CarService } from '../../car.service';
import {FinanceRecordList, Object, WriteOffRecordList} from "../../models/Mot";
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
    vdi;
    writeOffRecordList: WriteOffRecordList[] = [];
    financeList: FinanceRecordList[] = [];
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
            this.carService.getVdi(this.regNumb).subscribe(res => {
                this.vdi = res['object']['0'];
                if(this.vdi !== undefined) {
                    this.writeOffRecordList = this.vdi['vdi']['Response']['DataItems']['WriteOffRecordList'];
                    this.financeList = this.vdi['vdi']['Response']['DataItems']['FinanceRecordList'];
                }
            });
        }
    }

    showList(id: string, name: string) {
        const motTests = document.getElementsByName(name);
        for (let i = 0; i < motTests.length; i++) {
            motTests[i].classList.toggle('hidden');
        }
        const txt = document.getElementById(id);
        if(txt.innerText === '▼') {
            txt.innerText = '►';
        } else {
            txt.innerText = '▼';
        }
    }
}
