// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';

// export interface DialogData {
//   name : [];
//   // itemdata: string;
//   // name: string;
// }
export interface DialogData {
  itemdata ;
}

@Component({
  selector: 'app-dailogpopup',
  templateUrl: './dailogpopup.component.html',
  styleUrls: ['./dailogpopup.component.css']
})
export class DailogpopupComponent implements OnInit {

  public itemgriddata:Object;
  constructor(
    public dialogRef: MatDialogRef<DailogpopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData) { }
    // @Inject(MAT_DIALOG_DATA) public data:DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  rowSelected(args: RowSelectEventArgs) {
    this.data.itemdata = args.data;
  }

}
