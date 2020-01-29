import { Component, OnInit , ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { PageSettingsModel,SelectionSettingsModel ,EditSettingsModel,ToolbarItems  } from '@syncfusion/ej2-angular-grids';
import { DailogsalepopupComponent } from '../dailogsalepopup/dailogsalepopup.component';

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

  public saleDataInfo = {};
  public selectionOptions:SelectionSettingsModel;
  public pageSettings: PageSettingsModel;
  public data = [];
  public itemDataList = [];
  public customerDataList = [];
  public salepopup ;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];

  constructor(public dialog: MatDialog) {
    this.data.push({ id_f: 1,cust_name_f: "Maung Maung",Type: "Daimond",date_f : new Date(),net_amount_f: 1500},
    { id_f: 2,cust_name_f: "Aung Aung",Type: "Silver",date_f : new Date(2019,3,1),net_amount_f: 100},
    { id_f: 3,cust_name_f: "Hla Hla",Type: "Daimond",date_f : new Date(2019,4,3),net_amount_f: 100},
    { id_f: 4,cust_name_f: "Hnin Hnin",Type: "Silver",date_f : new Date(2019,5,5),net_amount_f: 1200},
    { id_f: 5,cust_name_f: "Mya Mya",Type: "Daimond",date_f : new Date(),net_amount_f: 2000},
    { id_f: 6,cust_name_f: "Khaing Khaing",Type: "Silver",date_f : new Date(),net_amount_f: 2000},
    { id_f: 7,cust_name_f: "Po Po",Type: "Gold",date_f : new Date(),net_amount_f: 1300},
    { id_f: 8,cust_name_f: "Hsu Hsu",Type: "Gold",date_f : new Date(),net_amount_f: 1100},
    { id_f: 9,cust_name_f: "Thu Zar",Type: "Daimond",date_f : new Date(2020,3,1),net_amount_f: 2000},
    { id_f: 10,cust_name_f: "Myo Myo",Type: "Silver",date_f : new Date(),net_amount_f: 2000},
    { id_f: 11,cust_name_f: "Lin Lae",Type: "Gold",date_f : new Date(),net_amount_f: 1300},
    { id_f: 12,cust_name_f: "Shwe Mhone",Type: "Gold",date_f : new Date(),net_amount_f: 1100},);

    this.itemDataList.push({ id_f: 1,code_f : "I-001",name_f: "Food",cate_name_f: "Daimond",unit_f : "Yangon" ,price_f:1500,qty_f: 3,dis_per_f: 0,dis_amt_f: 0,inactive_f :false},
    { id_f: 2,code_f : "I-002",name_f: "Meal",cate_name_f: "Silver",unit_f : "Yangon",price_f:1200,qty_f: 3,dis_per_f: 0,dis_amt_f: 0,inactive_f :false},
    { id_f: 3,code_f : "I-003",name_f: "Snack",cate_name_f: "Daimond",unit_f : "Yangon",price_f:1000,qty_f: 2,dis_per_f: 0,dis_amt_f: 0,inactive_f :false},
    { id_f: 4,code_f : "I-004",name_f: "Sweet Drink",cate_name_f: "Silver",unit_f : "Yangon",price_f:1700,qty_f: 1,dis_per_f: 0,dis_amt_f: 0,inactive_f :false},
    { id_f: 5,code_f : "I-005",name_f: "Purified Water",cate_name_f: "Daimond",unit_f : "Yangon",price_f:2000,qty_f: 10,dis_per_f: 0,dis_amt_f: 0,inactive_f :false},
    { id_f: 6,code_f : "I-006",name_f: "Lux France",cate_name_f: "Silver",unit_f : "Yangon",price_f:1000,qty_f: 2,dis_per_f: 0,dis_amt_f: 0,inactive_f :false},
    { id_f: 7,code_f : "I-007",name_f: "Toothbash",cate_name_f: "Gold",unit_f : "Yangon",price_f:1200,qty_f: 6,dis_per_f: 0,dis_amt_f: 0,inactive_f :false},
    { id_f: 8,code_f : "I-008",name_f: "Chochin",cate_name_f: "Gold",unit_f : "Yangon",price_f:1500,qty_f: 5,dis_per_f: 0,dis_amt_f: 0,inactive_f :false});
    
    this.customerDataList.push({ 'id_f':1,'name_f': 'Hnin Hnin','address_f': 'YGN','phone_f': '090909' },
                                { 'id_f':2,'name_f': 'Aung Aung','address_f': 'YGN','phone_f': '010101' },
                                { 'id_f':3,'name_f': 'Soe Soe ','address_f': 'Taungoo','phone_f': '080808'},
                                { 'id_f':4,'name_f': 'Thu Zar','address_f': 'Bgo','phone_f': '858585' },
                                { 'id_f':5,'name_f': 'Soe Moe' ,'address_f': 'Bgo','phone_f': '787878'});

  }

  ngOnInit() {
    this.pageSettings = { pageSize: 6 };
    this.selectionOptions = { type: 'Multiple', enableSimpleMultiRowSelection: false };
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true , newRowPosition: 'Bottom'};
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.saleDataInfo['date_f'] = new Date();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DailogsalepopupComponent, {
      width: '300px',
      data: this.salepopup
    });

    dialogRef.afterClosed().subscribe(result => {      
      console.log('The dialog was closed! ' + result);
    });
  }

  popupSaleData(val): void {
    const dialogRef = this.dialog.open(DailogsalepopupComponent, {
      width: '800px',
      data: this.salepopup
    });

    dialogRef.afterClosed().subscribe(result => {
      if(val == 'customer'){  
        this.saleDataInfo['cust_id_f'] = result.entityData.id_f;
        this.saleDataInfo['cust_name_f'] = result.entityData.name_f;
      }else if(val == 'salelist'){

        this.saleDataInfo['cust_id_f'] = result.entityData.id_f;
        this.saleDataInfo['cust_name_f'] = result.entityData.cust_name_f;
        this.saleDataInfo['date_f'] = result.entityData.date_f;
      }
    });
  }

  openSaleListPoup(val):void{
    if(val == 'customer'){
      this.salepopup = ["Customer Data" , this.customerDataList, false,true,true];
    }else if(val == 'salelist'){
      this.salepopup = ["Sale List" , this.data, false,true,false];
    }
    
    this.popupSaleData(val);
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
}
