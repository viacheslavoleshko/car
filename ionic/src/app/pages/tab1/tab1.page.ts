import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CarService } from '../../car.service';
import {FinanceRecordList, MotTests, Object, WriteOffRecordList} from "../../models/Mot";
import {ModalController, NavController} from "@ionic/angular";
import {PurchaseService} from "../../purchase.service";
import {log} from "util";
import {DiscountComponent} from "../discount/discount.component";
import {element} from "protractor";

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
    regNumb = '';
    obj: Object = new Object();
    tax;
    vdi;
    dvla;
    co;
    writeOffRecordList: WriteOffRecordList[] = [];
    financeList: FinanceRecordList[] = [];
    //show = false;
    motTest: MotTests[];
    motTable: MotTests[] = [];
    data: string[] = [];
    odometerValues: string[] = [];
    canvas;
    lineChart;
    constructor(private router: Router,
                private carService: CarService,
                private purchaseService: PurchaseService,
                private route : ActivatedRoute,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.search();
        this.route.params.subscribe((params) => {
            this.regNumb = params['regNumb'];
            if(this.regNumb === undefined)
                this.regNumb = this.purchaseService.numberVdi;
            this.search();
        });

    }

    search() {
        this.canvas = document.querySelector('#Chart');
        if(this.canvas)
        this.canvas.remove();
        this.motTest = undefined;
        if (this.regNumb === '' || this.regNumb === undefined) {
            this.obj = undefined;
            this.tax = undefined;
            this.dvla = undefined;
            this.co = undefined;
            this.vdi = undefined;

        } else {
            this.regNumb = this.regNumb.toUpperCase();
            this.carService.getMot(this.regNumb).subscribe((res) => {
                this.obj = res['object']['0'];
                if (this.obj !== undefined) {
                if (this.obj['m']['motTests'] !== undefined) {
                    this.createChart();
                }
                }
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
             this.showVdi(this.purchaseService.vdimap, this.regNumb.toUpperCase());
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
    showVdi(json, numb) {
        if (json.get(numb)) {
            this.vdi = json.get(numb)['vdi']['0'];
            if (this.vdi !== undefined && this.vdi['vdi'] !== null && this.vdi['vdi'] !== undefined) {
                this.writeOffRecordList = this.vdi['vdi']['Response']['DataItems']['WriteOffRecordList'];
                this.financeList = this.vdi['vdi']['Response']['DataItems']['FinanceRecordList'];
            }
        } else this.vdi = undefined;
    }
    dialog(state) {
        document.getElementById('dialog').style.display = state;
        document.getElementById('filter').style.display = state;


    }

    async scroll(event) {
        setTimeout(async () => {
            if (!this.purchaseService.showModal) {
                this.purchaseService.showModal = true;
                const modal = await this.modalController.create({
                    componentProps: {
                        data: this.regNumb
                    },
                    cssClass: 'modal',
                    component: DiscountComponent

                });
                await modal.present();
            }
            },2000);
    }
    createChart() {
        document.querySelector('#chartContainer').innerHTML = '<canvas id="Chart" width="600" height="500"></canvas>';
        this.data = [];
        this.odometerValues = [];
        this.motTable = [];
        this.motTest = this.obj['m']['motTests'];
        const canvas = document.getElementById('Chart');
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        for (let i = this.motTest.length - 1; i >= 0; i--) {
            this.data.push(this.motTest[i].completedDate.slice(0, 4));
            this.odometerValues.push(this.motTest[i].odometerValue);
            if (i === this.motTest.length - 1) {
                this.motTest[i].yearTotal = 0;
                this.motTable.push(this.motTest[i]);
            } else {
                this.motTest[i].yearTotal = Number(this.motTest[i].odometerValue) - Number(this.motTest[i + 1].odometerValue);
                if (this.motTest[i].yearTotal > 50)
                    this.motTable.push(this.motTest[i]);
            }
        }
        this.motTable = this.motTable.reverse();
        const data = {
            labels: this.data,
            datasets: [{
                label: 'Mileage history',
                data: this.odometerValues,
                borderColor: '#67d1ff',
            }]
        };

        const chartOptions = {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 80,
                    fontColor: '#67d1ff'
                }
            }
        };

        this.lineChart = new Chart(canvas, {
            type: 'line',
            data: data,
            options: chartOptions
        });
    }




}
