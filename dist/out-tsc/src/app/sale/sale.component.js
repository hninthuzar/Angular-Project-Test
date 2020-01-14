import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// export interface Tile {
//   cols: number;
//   rows: number;
//   text: string;
//   border: string;
//   color: string;
// }
let SaleComponent = class SaleComponent {
    constructor() {
        this.data = [
            { OrderID: 1, CustomerName: "Maung Maung", Type: "Daimond", ShipCity: "Yangon", SalePrice: 1500 },
            { OrderID: 2, CustomerName: "Aung Aung", Type: "Silver", ShipCity: "Bagan", SalePrice: 100 },
            { OrderID: 3, CustomerName: "Hla Hla", Type: "Daimond", ShipCity: "Yangon", SalePrice: 100 },
            { OrderID: 4, CustomerName: "Hnin Hnin", Type: "Silver", ShipCity: "Yangon", SalePrice: 1200 },
            { OrderID: 5, CustomerName: "Mya Mya", Type: "Daimond", ShipCity: "Bago", SalePrice: 2000 },
            { OrderID: 6, CustomerName: "Khaing Khaing", Type: "Silver", ShipCity: "Bagan", SalePrice: 2000 },
            { OrderID: 7, CustomerName: "Po Po", Type: "Gold", ShipCity: "Bago", SalePrice: 1300 },
            { OrderID: 8, CustomerName: "Hsu Hsu", Type: "Gold", ShipCity: "Yangon", SalePrice: 1100 },
            { OrderID: 9, CustomerName: "Thu Zar", Type: "Daimond", ShipCity: "Bago", SalePrice: 2000 },
            { OrderID: 10, CustomerName: "Myo Myo", Type: "Silver", ShipCity: "Bago", SalePrice: 2000 },
            { OrderID: 11, CustomerName: "Lin Lae", Type: "Gold", ShipCity: "Bagan", SalePrice: 1300 },
            { OrderID: 12, CustomerName: "Shwe Mhone", Type: "Gold", ShipCity: "Bagan", SalePrice: 1100 },
        ];
    }
    ngOnInit() {
        this.pageSettings = { pageSize: 6 };
        this.selectionOptions = { type: 'Multiple', enableSimpleMultiRowSelection: true };
    }
    rowSelected(args) {
        console.log("Arriveal of sale :" + args);
        // const selectedrowindex: number[] = this.grid.getSelectedRowIndexes();  // Get the selected row indexes.
        // alert(selectedrowindex); // To alert the selected row indexes.
        // const selectedrecords: object[] = this.grid.getSelectedRecords();  // Get the selected records.
    }
};
SaleComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sale',
        templateUrl: './sale.component.html',
        styleUrls: ['./sale.component.css']
    })
], SaleComponent);
export { SaleComponent };
//# sourceMappingURL=sale.component.js.map