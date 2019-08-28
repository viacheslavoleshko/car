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
      { path: "check",
      loadChildren: "../tab1/tab1.module#Tab1PageModule" 
      },

      { path: "review",
      loadChildren: "../tab2/tab2.module#Tab2PageModule" 
      },

      { path: "lowtax",
      loadChildren: "../tab3/tab3.module#Tab3PageModule" 
      },

      { path: "ins",
      loadChildren: "../tab4/tab4.module#Tab4PageModule" 
      }
    ]
  },
  {path: '', redirectTo: '/vehicle/check', pathMatch: 'full'},
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
