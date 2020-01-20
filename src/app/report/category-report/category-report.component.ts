import { Component, OnInit,ViewChild } from '@angular/core';
import { GridComponent,ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-category-report',
  templateUrl: './category-report.component.html',
  styleUrls: ['./category-report.component.css']
})
export class CategoryReportComponent implements OnInit {

  public categorydata  = [];
  public toolbar: ToolbarItems[];

  @ViewChild('grid', {static: true}) public grid: GridComponent;
  constructor() {
    this.categorydata.push({ 'id_f':1,'code_f': 'C_001','cat_name_f': 'Food','parent_id_f': 0 },
                          { 'id_f':2,'code_f': 'C_002','cat_name_f': 'Snack','parent_id_f':0 },
                          { 'id_f':3,'code_f': 'C_003','cat_name_f': 'Cool Drink ','parent_id_f': 1},
                          { 'id_f':4,'code_f': 'C_004','cat_name_f': 'Hot Drink','parent_id_f': 2 },
                          { 'id_f':5,'code_f': 'C_005','cat_name_f': 'Water' ,'parent_id_f': 1});
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
