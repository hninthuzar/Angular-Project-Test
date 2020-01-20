
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { IntegralUIModule } from '@lidorsystems/integralui-web/bin/integralui/integralui.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { DemoMaterialModule } from './material-module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';
import { SaleComponent } from './sale/sale.component';
import { SettingComponent } from './setting/setting.component';
import { HelpingComponent } from './helping/helping.component';
import { DailogpopupComponent } from './dailogpopup/dailogpopup.component';
import { CustomerService } from './customer/customer.service';
import { GridModule, PagerModule, PageService,SortService, FilterService ,EditService,ToolbarService,ExcelExportService  } from '@syncfusion/ej2-angular-grids';
import { DailogsalepopupComponent } from './dailogsalepopup/dailogsalepopup.component';
import { CustomerReportComponent } from './report/customer-report/customer-report.component';
import { AccordionModule, ToolbarModule, ContextMenuModule, TabModule, TreeViewModule, SidebarModule, MenuModule } from '@syncfusion/ej2-angular-navigations';
import { ItemReportComponent } from './report/item-report/item-report.component';
import { CategoryReportComponent } from './report/category-report/category-report.component';
import { SaleReportComponent } from './report/sale-report/sale-report.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DashboardComponent,
    CategoryComponent,
    ItemComponent,
    SaleComponent,
    SettingComponent,
    HelpingComponent,
    DailogpopupComponent,
    DailogsalepopupComponent,
    CustomerReportComponent,
    ItemReportComponent,
    CategoryReportComponent,
    SaleReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    IntegralUIModule,
    GridModule, PagerModule, AccordionModule, ToolbarModule, ContextMenuModule, TabModule, TreeViewModule, SidebarModule, MenuModule
  ],
  entryComponents: [ DailogpopupComponent,DailogsalepopupComponent],
  providers: [
    CustomerService,PageService,SortService, FilterService,EditService,ToolbarService,ExcelExportService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
