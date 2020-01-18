import { Component, OnInit,ViewChild } from '@angular/core';
import { GridComponent,ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.css']
})
export class CustomerReportComponent implements OnInit {
  public customerdata  = [];
  public toolbar: ToolbarItems[];

  @ViewChild('grid', {static: true}) public grid: GridComponent;

  constructor() { 
    this.customerdata.push({ 'id_f':1,'name_f': 'Hnin Hnin','address_f': 'YGN','phone_f': '090909' },
                                { 'id_f':2,'name_f': 'Aung Aung','address_f': 'YGN','phone_f': '010101' },
                                { 'id_f':3,'name_f': 'Soe Soe ','address_f': 'Taungoo','phone_f': '080808'},
                                { 'id_f':4,'name_f': 'Thu Zar','address_f': 'Bgo','phone_f': '858585' },
                                { 'id_f':5,'name_f': 'Soe Moe' ,'address_f': 'Bgo','phone_f': '787878'});
  }

  ngOnInit() {
    this.toolbar = ['Print','ExcelExport', 'Search'];
  }

  toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        this.grid.excelExport();
    }
  }

}
