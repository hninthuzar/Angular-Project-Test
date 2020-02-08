import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }
  apiURL: string = 'http://localhost:46239/api/customer/getCustomerList';
  temp: string = `${this.apiURL}/customer/getCustomerList/`;
  
  result = {};

  public async getCustomer() {
    try {
      this.result = await this.httpClient.post(`http://localhost:46239/api/customer/getCustomerList`,null).toPromise();     
      console.log('customerList at service >> ', this.result);
    }
    catch (ex) {
      console.log('ex >> ', ex);
    }
    return this.result;
  }

  // Save / Update
  public async saveApiCustomer(custData) {
    try {
      this.result = await this.httpClient.post(`http://localhost:46239/api/customer/saveCustomer`,custData).toPromise();     
      console.log('customerList at service >> ', this.result);
    }
    catch (ex) {
      console.log('ex >> ', ex);
    }
    return this.result;
  }

  public async deleteApiCustomer(custId) {
    try {
      this.result = await this.httpClient.post(`http://localhost:46239/api/customer/deleteCustomer`,custId).toPromise();     
      console.log('customerList at service >> ', this.result);
    }
    catch (ex) {
      console.log('ex >> ', ex);
    }
    return this.result;
  }

}
