import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerInfo = {};
  customerList = [];
  // customerList = [{ 'id_f':1,'name_f': 'Hnin Hnin','address_f': 'YGN','phone_f': '090909' }, 
  //                   { 'id_f':2,'name_f': 'Aung Aung','address_f': 'YGN','phone_f': '010101' }, 
  //                   { 'id_f':3,'name_f': 'Soe Soe ','address_f': 'Taungoo','phone_f': '080808'}, 
  //                   { 'id_f':4,'name_f': 'Thu Zar','address_f': 'Bgo','phone_f': '858585' },
  //                   { 'id_f':5,'name_f': 'Soe Moe' ,'address_f': 'Bgo','phone_f': '787878'},];



 
  constructor(custservice : CustomerService) {
    
    this.customerList.push({ 'id_f':1,'name_f': 'Hnin Hnin','address_f': 'YGN','phone_f': '090909' });
    this.customerList.push({ 'id_f':2,'name_f': 'Aung Aung','address_f': 'YGN','phone_f': '010101' });
    this.customerList.push({ 'id_f':3,'name_f': 'Soe Soe ','address_f': 'Taungoo','phone_f': '080808'});
    this.customerList.push({ 'id_f':4,'name_f': 'Thu Zar','address_f': 'Bgo','phone_f': '858585' });
    this.customerList.push({ 'id_f':5,'name_f': 'Soe Moe' ,'address_f': 'Bgo','phone_f': '787878'});

   }

  ngOnInit() {
    this.getCustomerList();
  }

  getCustomerList(): void{
    // var n = prompt("Enter a String").toLowerCase(); 
  }
  newCustomer(): void{
    this.customerInfo = {};
  }

  selectCustomer(data): void{
    this.customerInfo = data;
  }

  saveCustomer(): void{

    // var resobject = this.customerList.filter(x=> x.id_f == this.customerInfo['id_f']);
    var resindex = this.customerList.findIndex(x=> x.id_f == this.customerInfo['id_f']);
    // var resbool = this.customerList.map(x=>x['id_f'] == this.customerInfo['id_f']);

    //console.log(dst);
    // for(var i=0;i<this.customerList.length;i++){
    //   if(this.customerList[i].id_f == this.customerInfo['id_f']){
    //     this.customerList[i] = this.customerInfo;
    //     this.newCustomer();
    //     return;
    //   }
    // }
    if(resindex < 0){
      this.customerInfo["id_f"] = this.customerList.length + 1;
      this.customerList.push(this.customerInfo);
    }else{
      this.customerList[resindex] = this.customerInfo;
    }    
    this.newCustomer();    
  }

  deleteCustomer(): void{
    var resindex = this.customerList.findIndex(x=> x.id_f == this.customerInfo['id_f']);
    this.customerList.splice(resindex, 1);
    this.newCustomer();
  }

}

