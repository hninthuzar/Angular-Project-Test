import { Component, OnInit , ViewChild } from '@angular/core';
import { GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { PageSettingsModel,SelectionSettingsModel  } from '@syncfusion/ej2-angular-grids';

  // export interface Tile {
  //   cols: number;
  //   rows: number;
  //   text: string;
  //   border: string;
  //   color: string;
  // }
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  // tiles: Tile[] = [
  //   {text: 'Tile 1', cols: 1, rows: 1 ,border: '3px double purple', color: 'lightblue'},
  //   {text: 'Tile 2', cols: 1, rows: 1 ,border: '3px double red', color: 'lightblue'},
  //   {text: 'Tile 3', cols: 1, rows: 1 ,border: '3px double skyblue', color: 'lightblue'},
  //   {text: 'Tile 4', cols: 1, rows: 1 ,border: '3px double yellow', color: 'lightblue'},
  //   {text: 'Tile 1', cols: 1, rows: 1 ,border: '3px double purple', color: 'lightgreen'},
  //   {text: 'Tile 2', cols: 1, rows: 1 ,border: '3px double red', color: 'lightgreen'},
  //   {text: 'Tile 3', cols: 1, rows: 1 ,border: '3px double skyblue', color: 'lightgreen'},
  //   {text: 'Tile 4', cols: 1, rows: 1 ,border: '3px double yellow', color: 'lightgreen'},
  //   {text: 'Tile 1', cols: 1, rows: 1 ,border: '3px double purple', color: 'lightgreen'},
  //   {text: 'Tile 2', cols: 1, rows: 1 ,border: '3px double red', color: 'lightgreen'},
  //   {text: 'Tile 3', cols: 1, rows: 1 ,border: '3px double skyblue', color: 'lightgreen'},
  //   {text: 'Tile 4', cols: 1, rows: 1 ,border: '3px double yellow', color: 'lightgreen'},
  //   {text: 'Tile 1', cols: 1, rows: 1 ,border: '3px double purple', color: 'lightgreen'},
  //   {text: 'Tile 2', cols: 1, rows: 1 ,border: '3px double red', color: 'lightgreen'},
  //   {text: 'Tile 3', cols: 1, rows: 1 ,border: '3px double skyblue', color: 'lightgreen'},
  //   {text: 'Tile 4', cols: 1, rows: 1 ,border: '3px double yellow', color: 'lightgreen'},
  //   ];

  public saleDataInfo = {};
  public selectionOptions:SelectionSettingsModel;
  public pageSettings: PageSettingsModel;
  public data = [];

  constructor() {
    this.data.push({ id_f: 1,CustomerName: "Maung Maung",Type: "Daimond",ShipCity : "Yangon",SalePrice: 1500},
    { id_f: 2,CustomerName: "Aung Aung",Type: "Silver",ShipCity : "Bagan",SalePrice: 100},
    { id_f: 3,CustomerName: "Hla Hla",Type: "Daimond",ShipCity : "Yangon",SalePrice: 100},
    { id_f: 4,CustomerName: "Hnin Hnin",Type: "Silver",ShipCity : "Yangon",SalePrice: 1200},
    { id_f: 5,CustomerName: "Mya Mya",Type: "Daimond",ShipCity : "Bago",SalePrice: 2000},
    { id_f: 6,CustomerName: "Khaing Khaing",Type: "Silver",ShipCity : "Bagan",SalePrice: 2000},
    { id_f: 7,CustomerName: "Po Po",Type: "Gold",ShipCity : "Bago",SalePrice: 1300},
    { id_f: 8,CustomerName: "Hsu Hsu",Type: "Gold",ShipCity : "Yangon",SalePrice: 1100},
    { id_f: 9,CustomerName: "Thu Zar",Type: "Daimond",ShipCity : "Bago",SalePrice: 2000},
    { id_f: 10,CustomerName: "Myo Myo",Type: "Silver",ShipCity : "Bago",SalePrice: 2000},
    { id_f: 11,CustomerName: "Lin Lae",Type: "Gold",ShipCity : "Bagan",SalePrice: 1300},
    { id_f: 12,CustomerName: "Shwe Mhone",Type: "Gold",ShipCity : "Bagan",SalePrice: 1100},);
   }

  ngOnInit() {
    this.pageSettings = { pageSize: 6 };
    this.selectionOptions = { type: 'Multiple', enableSimpleMultiRowSelection: false };
    this.saleDataInfo['date_f'] = new Date();
  }
  rowSelected(args: RowSelectEventArgs) {
    console.log("Arriveal of sale :" + args);
  }
  newSaleData():void{
    this.saleDataInfo = {};
    this.saleDataInfo['date_f'] = new Date();
  }
  saveSaleDataList():void{
    var resindex = this.data.findIndex(x=> x.id_f == this.saleDataInfo['id_f']);
    if(resindex < 0){
      this.data["id_f"] = this.data.length + 1;
      this.data.push(this.saleDataInfo);
      // this.itempopup = ["Item Data" , "Saving is completed!", false];
    }else{
      this.data[resindex] = this.saleDataInfo;
      // this.itempopup = ["Item Data" , "Updating is completed!", false];
    }    
    this.newSaleData();     
  }
  deleteSaleData():void{
    // this.itempopup = ["Item Data" , "Are you sure you want to delete it?", true];
    // this.openDialog();
    var resindex = this.data.findIndex(x=> x.id_f == this.saleDataInfo['id_f']);
    this.data.splice(resindex, 1);
    this.newSaleData();
    // this.itempopup = ["Item Data" , "Deleting is completed!", false];
    // this.openDialog();
  }
}
