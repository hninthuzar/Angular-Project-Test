import { Component, OnInit,ViewChild } from '@angular/core';
import { GridComponent,ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
// import {default as _rollupMoment} from 'moment';
// const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-sale-report',
  templateUrl: './sale-report.component.html',
  styleUrls: ['./sale-report.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class SaleReportComponent implements OnInit {
  public saledata  = [];
  public rptoption = {};
  public toolbar: ToolbarItems[];
  @ViewChild('grid', {static: true}) public grid: GridComponent;
  constructor() { }

  ngOnInit() {
    this.rptoption['start_date_f'] = new Date();
    this.rptoption['end_date_f'] = new Date();
    this.toolbar = ['Print','ExcelExport', 'Search'];
  }
  
  toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        this.grid.excelExport();
    }
  }

}
