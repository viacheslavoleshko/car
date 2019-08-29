import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
  { path: 'details', loadChildren: './pages/mot-details/mot-details.module#MotDetailsPageModule' },
  { path: 'tax-details', loadChildren: './pages/tax-details/tax-details.module#TaxDetailsPageModule' },
  { path: 'purchase/:regNumb', loadChildren: './pages/purchase/purchase.module#PurchasePageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
