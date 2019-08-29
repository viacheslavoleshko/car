import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {PurchaseService} from "../../purchase.service";
import {HistoryService} from "../../history.service";
import {History} from "../../models/History";

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit, DoCheck {
  constructor(private historyService: HistoryService) {
  }
  history: History[] = [];
  ngOnInit() {
  this.getHistory();
  }

    ngDoCheck(): void {
        this.getHistory()
    }

 getHistory() {
     this.historyService.getHistory().subscribe((res) => {
         this.history = res['object'];
     });
 }
}


