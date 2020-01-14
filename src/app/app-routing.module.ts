import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';
import { SaleComponent } from './sale/sale.component';
import { SettingComponent } from './setting/setting.component';
import { HelpingComponent } from './helping/helping.component';

export const routes: Routes = [  { path: '', pathMatch: 'full', redirectTo: 'pos/dashboard' },
                             { path: 'pos/dashboard', component: DashboardComponent },                       
                             { path: 'pos/customer', component: CustomerComponent },
                             { path: 'pos/category', component: CategoryComponent },
                             { path: 'pos/item', component: ItemComponent },
                             { path: 'pos/sale', component: SaleComponent },
                             { path: 'pos/setting', component: SettingComponent },
                             { path: 'pos/helping', component: HelpingComponent }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
