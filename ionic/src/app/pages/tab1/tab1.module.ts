import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1Page } from './tab1.page';
import { MotDetailsPage } from '../mot-details/mot-details.page';
import { MotDetailsPageModule } from '../mot-details/mot-details.module';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page
  },
  {
    path: ':regNumb',
    component: Tab1Page
  },
  {
    path: ':/component:/regNumb',
    component : MotDetailsPageModule
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
