import { Component, OnInit,ViewChild } from '@angular/core';
import { GridComponent,ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-item-report',
  templateUrl: './item-report.component.html',
  styleUrls: ['./item-report.component.css']
})
export class ItemReportComponent implements OnInit {

  public itemdata  = [];
  public data  = [];
  public toolbar: ToolbarItems[];
  public inactive_f:boolean;

  @ViewChild('grid', {static: true}) public grid: GridComponent;

  constructor() {
    this.itemdata.push({ id_f: 1,code_f : "I-001",name_f: "Food",cate_name_f: "Daimond",unit_f : "Yangon" ,price_f:1500,inactive_f :false},
    { id_f: 2,code_f : "I-002",name_f: "Meal",cate_name_f: "Silver",unit_f : "Yangon",price_f:1200,inactive_f :false},
    { id_f: 3,code_f : "I-003",name_f: "Snack",cate_name_f: "Daimond",unit_f : "Yangon",price_f:1000,inactive_f :false},
    { id_f: 4,code_f : "I-004",name_f: "Sweet Drink",cate_name_f: "Silver",unit_f : "Yangon",price_f:1700,inactive_f :false},
    { id_f: 5,code_f : "I-005",name_f: "Purified Water",cate_name_f: "Daimond",unit_f : "Yangon",price_f:2000,inactive_f :true},
    { id_f: 6,code_f : "I-006",name_f: "Lux France",cate_name_f: "Silver",unit_f : "Yangon",price_f:1000,inactive_f :false},
    { id_f: 7,code_f : "I-007",name_f: "Toothbash",cate_name_f: "Gold",unit_f : "Yangon",price_f:1200,inactive_f :false},
    { id_f: 8,code_f : "I-008",name_f: "Chochin",cate_name_f: "Gold",unit_f : "Yangon",price_f:1500,inactive_f :false});
   }

  ngOnInit() {
    this.inactive_f = true;
    this.toolbar = ['Print','ExcelExport', 'Search'];
    this.getItemList();
  }

  toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        this.grid.excelExport();
    }
  }

  getItemList(): void{
    if(this.inactive_f){
      this.data = this.itemdata;
    }else{
      this.data = this.itemdata.filter(x=> x.inactive_f == this.inactive_f);
    }    
    console.log(this.inactive_f);
  }

}
