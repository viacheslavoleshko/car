import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss'],
})

export class DiscountComponent implements OnInit {
  @Input() data: number;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

    close() {
      this.modalController.dismiss();
    }
}
