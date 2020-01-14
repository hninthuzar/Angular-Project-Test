import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailogpopupComponent } from '../dailogpopup/dailogpopup.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemInfo = {};
  itempopup = [];
  public data = [];

  constructor(public dialog: MatDialog) { 
    this.data.push({ id_f: 1,code_f : "I-001",name_f: "Food",cate_name_f: "Daimond",unit_f : "Yangon" ,price_f:1500,inactive_f :false},
    { id_f: 2,code_f : "I-002",name_f: "Meal",cate_name_f: "Silver",unit_f : "Yangon",price_f:1200,inactive_f :false},
    { id_f: 3,code_f : "I-003",name_f: "Snack",cate_name_f: "Daimond",unit_f : "Yangon",price_f:1000,inactive_f :false},
    { id_f: 4,code_f : "I-004",name_f: "Sweet Drink",cate_name_f: "Silver",unit_f : "Yangon",price_f:1700,inactive_f :false},
    { id_f: 5,code_f : "I-005",name_f: "Purified Water",cate_name_f: "Daimond",unit_f : "Yangon",price_f:2000,inactive_f :true},
    { id_f: 6,code_f : "I-006",name_f: "Lux France",cate_name_f: "Silver",unit_f : "Yangon",price_f:1000,inactive_f :false},
    { id_f: 7,code_f : "I-007",name_f: "Toothbash",cate_name_f: "Gold",unit_f : "Yangon",price_f:1200,inactive_f :false},
    { id_f: 8,code_f : "I-008",name_f: "Chochin",cate_name_f: "Gold",unit_f : "Yangon",price_f:1500,inactive_f :false});
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DailogpopupComponent, {
      width: '300px',
      data: this.itempopup
    });

    dialogRef.afterClosed().subscribe(result => {      
      console.log('The dialog was closed');
      return result;
    });
  }

  openItemListDialog(): void {
    const dialogRef = this.dialog.open(DailogpopupComponent, {
      width: '800px',
      data: this.itempopup
    });

    dialogRef.afterClosed().subscribe(result => {  
      this.itemInfo = result.itemdata;    
    });
  }

  ngOnInit() {
  }

  openItemListPoup():void{
    this.itempopup = ["Item Data" , this.data, false,true];
    this.openItemListDialog();
  }

  newItem():void{
    this.itemInfo = {};
  }
  saveItemList():void{
    var resindex = this.data.findIndex(x=> x.id_f == this.itemInfo['id_f']);
    if(resindex < 0){
      this.data["id_f"] = this.data.length + 1;
      this.data.push(this.itemInfo);
      this.itempopup = ["Item Data" , "Saving is completed!", false];
    }else{
      this.data[resindex] = this.itemInfo;
      this.itempopup = ["Item Data" , "Updating is completed!", false];
    }    
    this.newItem();     
    this.openDialog();
  }
  deleteItem():void{
    // this.itempopup = ["Item Data" , "Are you sure you want to delete it?", true];
    // this.openDialog();
    var resindex = this.data.findIndex(x=> x.id_f == this.itemInfo['id_f']);
    this.data.splice(resindex, 1);
    this.newItem();
    this.itempopup = ["Item Data" , "Deleting is completed!", false];
    this.openDialog();
  }

}
