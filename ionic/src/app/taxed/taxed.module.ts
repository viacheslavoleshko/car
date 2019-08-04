import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TaxedPage } from './taxed.page';

const routes: Routes = [
  {
    path: 'taxed',
    component: TaxedPage,
    children: [
      { path: 'tax', loadChildren: '../tax/tax.module#TaxPageModule' },
      { path: 'mot', loadChildren: '../mot/mot.module#MotPageModule' }
    ]
  },
  {
    path: '',
    redirectTo: '/taxed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaxedPage]
})
export class TaxedPageModule {}
