import { Component, OnInit } from '@angular/core';
import {PurchaseService} from "../../purchase.service";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(public purchseService: PurchaseService) { }

  ngOnInit() {
  }

}
