import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CarService } from '../../car.service';
import {FinanceRecordList, MotTests, Object, StolenMiaftrRecordList, WriteOffRecordList} from "../../models/Mot";
import {ModalController} from "@ionic/angular";
import {PurchaseService} from "../../purchase.service";
import {DiscountComponent} from "../discount/discount.component";
import {log} from "util";

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
    stolen: string[] = [];
    writeOffRecordList: WriteOffRecordList[] = [];
    financeList: FinanceRecordList[] = [];
    stolenList: StolenMiaftrRecordList[] = [];
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
        this.route.params.subscribe((params) => {
            this.regNumb = params['regNumb'];
            if(this.purchaseService.numberVdi !== '')
                this.regNumb = this.purchaseService.numberVdi;
            if(this.router.url !== '/vehicle')
            this.purchaseService.url = this.router.url;
            this.search();
        });

    }

    search() {
        this.canvas = document.querySelector('#Chart');
        if(this.canvas)
        this.canvas.remove();
        this.motTest = undefined;
        this.obj = undefined;
        this.tax = undefined;
        this.dvla = undefined;
        this.co = undefined;
        this.vdi = undefined;
        this.stolen = [];
        if (this.regNumb !== '' && this.regNumb !== undefined) {
            this.showDiscount();
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
            this.showStolen(this.purchaseService.stolen, this.regNumb)
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
            this.vdi = json.get(numb);
            if (this.vdi !== undefined && this.vdi['vdi'] !== null && this.vdi['vdi'] !== undefined) {
                this.writeOffRecordList = this.vdi['vdi']['Response']['DataItems']['WriteOffRecordList'];
                this.financeList = this.vdi['vdi']['Response']['DataItems']['FinanceRecordList'];
                this.stolenList = this.vdi['vdi']['Response']['DataItems']['StolenMiaftrRecordList'];
            }
        } else this.vdi = undefined;
    }

    showStolen(map, numb) {
        if (map.get(numb)) {
            const temp = map.get(numb);
            let i = 0;
            while (temp[`line${i}`] !== undefined) {
                this.stolen.push(temp[`line${i}`]);
                i++;
            }
        }
    }
    dialog(state) {
        document.getElementById('dialog').style.display = state;
        document.getElementById('filter').style.display = state;


    }

    async showDiscount() {
        setTimeout(async () => {
            if ( this.obj !== undefined ||
            this.tax !== undefined ||
            this.dvla !== undefined ||
            this.co !== undefined ||
            this.vdi !== undefined)
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
            },30000);

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
            if (i === this.motTest.length - 1) {
                this.motTest[i].yearTotal = 0;
                this.motTable.push(this.motTest[i]);
                this.data.push(this.motTest[i].completedDate.slice(0, 4));
                this.odometerValues.push(this.motTest[i].odometerValue);
            } else {
                this.motTest[i].yearTotal = Number(this.motTest[i].odometerValue) - Number(this.motTest[i + 1].odometerValue);
                if (Math.abs(this.motTest[i].yearTotal) > 50) {
                    this.data.push(this.motTest[i].completedDate.slice(0, 4));
                    this.odometerValues.push(this.motTest[i].odometerValue);
                    this.motTable.push(this.motTest[i]);
                }
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
