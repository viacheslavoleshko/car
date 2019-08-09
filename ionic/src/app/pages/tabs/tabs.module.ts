import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "vehicle",
    component: TabsPage,
    children: [
      { path: "",
      loadChildren: "../tab1/tab1.module#Tab1PageModule" 
      },
      { path: "tab2", 
      loadChildren: "../tab2/tab2.module#Tab2PageModule" 
      }
    ]
  },
  {path: '', redirectTo: '/vehicle/', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
