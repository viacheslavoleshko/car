import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CarService } from '../../car.service';
import {
    FinanceRecordList,
    MotTests,
    Object,
    PlateChangeList,
    StolenMiaftrRecordList,
    WriteOffRecordList
} from "../../models/Mot";
import {ModalController} from "@ionic/angular";
import {PurchaseService} from "../../purchase.service";
import {DiscountComponent} from "../discount/discount.component";
import {log} from "util";
import * as moment from 'moment'
import {months} from "moment";

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
    taxDays;
    motDays;
    stolen: string[] = [];
    writeOffRecordList: WriteOffRecordList[] = [];
    financeList: FinanceRecordList[] = [];
    stolenList: StolenMiaftrRecordList[] = [];
    plateChangeList: PlateChangeList[] = [];
    motTest: MotTests[];
    motTable: MotTests[] = [];
    data: string[] = [];
    odometerValues: string[] = [];
    canvas;
    lineChart;
    mileage = false;
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
        this.taxDays = undefined;
        this.motDays = undefined;
        this.stolen = [];
        this.mileage = false;
        if (this.regNumb !== '' && this.regNumb !== undefined) {
            this.showDiscount();
            this.regNumb = this.regNumb.toUpperCase();
            this.carService.getMot(this.regNumb).subscribe((res) => {
                this.obj = res['object']['0'];
                if (this.obj !== undefined) {
                    if (this.obj['m']['motTests'] !== undefined) {
                        this.createChart();
                        var motDate = new Date(moment(this.obj['m']['motTests']['0']['expiryDate']).format('YYYY-MM-DD'));
                        var today = new Date();
                        this.motDays = this.diffdate(motDate, today);
                    }
                }
            });
            this.carService.getTax(this.regNumb).subscribe((res) => {
                this.tax = res['object']['0'];
                this.redTax();
                var taxDate = new Date(moment(res['object']['0']['t']['Tax due']).format('YYYY-MM-DD'));
                var today = new Date();
                this.taxDays = this.diffdate(taxDate, today);
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

    diffdate(date1, date2) {
        var _MS_PER_DAY = 1000 * 60 * 60 * 24;
        // Discard the time and time-zone information.
        var utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
        var utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
      
        return Math.floor((utc1 - utc2) / _MS_PER_DAY);
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
            this.redVdi();
            if (this.vdi !== undefined && this.vdi['vdi'] !== null && this.vdi['vdi'] !== undefined) {
                this.writeOffRecordList = this.vdi['vdi']['Response']['DataItems']['WriteOffRecordList'];
                this.financeList = this.vdi['vdi']['Response']['DataItems']['FinanceRecordList'];
                this.stolenList = this.vdi['vdi']['Response']['DataItems']['StolenMiaftrRecordList'];
                this.plateChangeList = this.vdi['vdi']['Response']['DataItems']['PlateChangeList'];
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
                if (this.motTest[i].yearTotal < 0)
                    this.mileage = true;
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

    redVdi() {
        let today = new Date();
        setTimeout(() => {
           today = new Date();
           if(this.vdi['vdi']['Response']['DataItems']['WrittenOff'])
           document.getElementById('writtenOff').classList.add('red');
           if(this.vdi['vdi']['Response']['DataItems']['LatestKeeperChangeDate']) {
               let changeData = this.transferData(this.vdi['vdi']['Response']['DataItems']['LatestKeeperChangeDate']);
               if(this.monthsDiff(changeData, today) < 6)
               document.getElementById('LatestKeeperChangeDate').classList.add('red');
           }
           if(this.vdi['vdi']['Response']['DataItems']['LatestV5cIssuedDate']) {
               let changeData = this.transferData(this.vdi['vdi']['Response']['DataItems']['LatestV5cIssuedDate']);
               if(this.monthsDiff(changeData, today) < 6)
                   document.getElementById('LatestV5cIssuedDate').classList.add('red');
           }
            if(this.vdi['vdi']['Response']['DataItems']['StolenStatus'])
            if(this.vdi['vdi']['Response']['DataItems']['StolenStatus'].toLowerCase() === 'stolen')
                document.getElementById('StolenStatus').classList.add('red');
            if(this.vdi['vdi']['Response']['DataItems']['PreviousColour'])
                document.getElementById('PreviousColour').classList.add('red');
            if(this.vdi['vdi']['Response']['DataItems']['ScrapDate'])
                document.getElementById('ScrapDate').classList.add('red');
            if(this.vdi['vdi']['Response']['DataItems']['imported'])
                document.getElementById('imported').classList.add('red');
            if(this.vdi['vdi']['Response']['DataItems']['StolenDate'])
                document.getElementById('StolenDate').classList.add('red');
            if(this.vdi['vdi']['Response']['DataItems']['WriteOffRecordCount'])
            if(this.vdi['vdi']['Response']['DataItems']['WriteOffRecordCount'] !== '0')
                document.getElementById('WriteOffRecordCount').classList.add('red');
            if(this.vdi['vdi']['Response']['DataItems']['FinanceRecordCount'])
                if(this.vdi['vdi']['Response']['DataItems']['FinanceRecordCount'] !== '0')
                    document.getElementById('FinanceRecordCount').classList.add('red')
            if(this.vdi['vdi']['Response']['DataItems']['ImportUsedBeforeUkRegistration'])
                document.getElementById('ImportUsedBeforeUkRegistration').classList.add('red');
            if(this.vdi['vdi']['Response']['DataItems']['MileageAnomalyDetected'])
                document.getElementById('MileageAnomalyDetected').classList.add('red');
            if(this.vdi['vdi']['Response']['DataItems']['Scrapped'])
                document.getElementById('Scrapped').classList.add('red');
            if(this.vdi['vdi']['Response']['DataItems']['HighRiskRecordCount'])
                if(this.vdi['vdi']['Response']['DataItems']['HighRiskRecordCount'] !== '0')
                    document.getElementById('HighRiskRecordCountt').classList.add('red')
            if(this.vdi['vdi']['Response']['DataItems']['ImportDate'])
                document.getElementById('ImportDate').classList.add('red');
            if(this.vdi['vdi']['Response']['DataItems']['Exported'])
                document.getElementById('Exported').classList.add('red');
            if(this.vdi['vdi']['Response']['DataItems']['ExportDate'])
                document.getElementById('ExportDate').classList.add('red');
            if(this.vdi['vdi']['Response']['DataItems']['WriteOffCategory'])
                document.getElementById('WriteOffCategory').classList.add('red');

       },500);
    }
  monthsDiff(d1, d2) {
      var diff =(d2.getTime() - d1.getTime()) / 1000;
      diff /= (60 * 60 * 24 * 7 * 4);
      return Math.abs(Math.round(diff));
  }
  transferData(data) {
      let latestChange = data.split('/');
      let string = latestChange[2] + '.' + latestChange[1] + '.' + latestChange[0];
      return new Date(moment(string).format('YYYY-MM-DD'));
  }
  redTax() {
      if(this.tax['t']['Status'])
      if(this.tax['t']['Status'].toLowerCase() === 'untaxed' || this.tax['t']['Status'].toLowerCase() === 'sorn')
          document.getElementById('taxStatus').classList.add('red');
      if(this.tax['t']['Export marker'])
          if(this.tax['t']['Export marker'].toLowerCase() === 'yes')
              document.getElementById('exportMarker').classList.add('red');
  }
}
