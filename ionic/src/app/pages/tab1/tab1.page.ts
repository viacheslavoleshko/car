import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CarService } from '../../car.service';
import {FinanceRecordList, Object, WriteOffRecordList} from "../../models/Mot";
import {NavController} from "@ionic/angular";
import {PurchaseService} from "../../purchase.service";

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
    dvla;
    co;
    writeOffRecordList: WriteOffRecordList[] = [];
    financeList: FinanceRecordList[] = [];
    show = false;
    constructor(private router: Router,
                private carService: CarService,
                private purchaseService: PurchaseService,
                private route : ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.regNumb = params['regNumb'];
        });
        if(this.regNumb !== null)
        this.search();
        if (this.purchaseService.vdi) {
            this.showVdi(this.purchaseService.vdi);
            this.regNumb = this.purchaseService.numberVdi;
        }

    }

    search() {
        //this.router.navigate(['tabs/tab1', `${this.regNumb}`] );
        if (this.regNumb === '') {
            this.obj = undefined;
            this.tax = undefined;
            this.dvla = undefined;
            this.co = undefined;
        } else {
            this.carService.getMot(this.regNumb).subscribe((res) => {
                this.obj = res['object']['0'];
            });
            this.carService.getTax(this.regNumb).subscribe((res) => {
                this.tax = res['object']['0'];
            });
            // this.carService.getVdi(this.regNumb).subscribe(res => {
            //             //     this.vdi = res['object']['0'];
            //             //     if(this.vdi !== undefined && this.vdi['vdi'] !== null && this.vdi['vdi'] !== undefined) {
            //             //         this.writeOffRecordList = this.vdi['vdi']['Response']['DataItems']['WriteOffRecordList'];
            //             //         this.financeList = this.vdi['vdi']['Response']['DataItems']['FinanceRecordList'];
            //             //     }
            //             // });
            this.carService.getDvla(this.regNumb).subscribe((res) => {
                this.dvla = res['object']['0'];
            });
            this.carService.getCo(this.regNumb).subscribe((res) => {
                this.co = res['object']['0'];
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
    showVdi(json) {
        this.vdi = json['vdi']['0'];
        if(this.vdi !== undefined && this.vdi['vdi'] !== null && this.vdi['vdi'] !== undefined) {
            this.writeOffRecordList = this.vdi['vdi']['Response']['DataItems']['WriteOffRecordList'];
            this.financeList = this.vdi['vdi']['Response']['DataItems']['FinanceRecordList'];
        }
    }
}
