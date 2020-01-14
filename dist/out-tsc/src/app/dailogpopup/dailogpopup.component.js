import * as tslib_1 from "tslib";
// import { Component, OnInit } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// export interface DialogData {
//   name : [];
//   // itemdata: string;
//   // name: string;
// }
let DailogpopupComponent = class DailogpopupComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    // @Inject(MAT_DIALOG_DATA) public data:DialogData) { }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
};
DailogpopupComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dailogpopup',
        templateUrl: './dailogpopup.component.html',
        styleUrls: ['./dailogpopup.component.css']
    }),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA))
], DailogpopupComponent);
export { DailogpopupComponent };
//# sourceMappingURL=dailogpopup.component.js.map