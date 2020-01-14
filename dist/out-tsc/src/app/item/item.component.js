import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DailogpopupComponent } from '../dailogpopup/dailogpopup.component';
let ItemComponent = class ItemComponent {
    // itemdata: string;
    // name: string; 
    constructor(dialog) {
        this.dialog = dialog;
        this.itemInfo = {};
        this.itempopup = [];
        this.data = [
            { OrderID: 1, CustomerName: "Maung Maung", Type: "Daimond", ShipCity: "Yangon" },
            { OrderID: 2, CustomerName: "Aung Aung", Type: "Silver", ShipCity: "Yangon" },
            { OrderID: 3, CustomerName: "Hla Hla", Type: "Daimond", ShipCity: "Yangon" },
            { OrderID: 4, CustomerName: "Hnin Hnin", Type: "Silver", ShipCity: "Yangon" },
            { OrderID: 5, CustomerName: "Mya Mya", Type: "Daimond", ShipCity: "Yangon" },
            { OrderID: 6, CustomerName: "Khaing Khaing", Type: "Silver", ShipCity: "Yangon" },
            { OrderID: 7, CustomerName: "Po Po", Type: "Gold", ShipCity: "Yangon" },
            { OrderID: 8, CustomerName: "Hsu Hsu", Type: "Gold", ShipCity: "Yangon" },
        ];
    }
    openDialog() {
        const dialogRef = this.dialog.open(DailogpopupComponent, {
            width: '300px',
            data: this.itempopup
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
        });
    }
    openItemListDialog() {
        const dialogRef = this.dialog.open(DailogpopupComponent, {
            width: '800px',
            data: this.itempopup
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
        });
    }
    ngOnInit() {
    }
    openItemListPoup() {
        this.itempopup = ["Item Data", this.data, false, true];
        this.openItemListDialog();
    }
    newItem() {
        this.itemInfo = {};
    }
    saveItemList() {
        this.itempopup = ["Item Data", "Saving is completed!", false];
        this.openDialog();
        console.log(this.itemInfo);
    }
    deleteItem() {
        this.itempopup = ["Item Data", "Are you sure you want to delete it?", true];
        this.openDialog();
        console.log(this.itemInfo);
    }
};
ItemComponent = tslib_1.__decorate([
    Component({
        selector: 'app-item',
        templateUrl: './item.component.html',
        styleUrls: ['./item.component.css']
    })
], ItemComponent);
export { ItemComponent };
//# sourceMappingURL=item.component.js.map