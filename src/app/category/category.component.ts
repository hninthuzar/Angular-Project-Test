import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussel sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categoryInfo = {};
categoryList = [];
parentCategory = [];
// parentCategory = [{ 'cat_name_f': 'Cat One' }, 
//                     { 'cat_name_f': 'Cat Two' }, 
//                     { 'cat_name_f': 'Cat Three!'}, 
//                     { 'cat_name_f': 'Cat Four' },];

// private _transformer = (node: FoodNode, level: number) => {
//     return {
//       expandable: !!node.children && node.children.length > 0,
//       name: node.name,
//       level: level,
//     };
//   }

//   treeControl = new FlatTreeControl<ExampleFlatNode>(
//       node => node.level, node => node.expandable);

//   treeFlattener = new MatTreeFlattener(
//       this._transformer, node => node.level, node => node.expandable, node => node.children);

//   dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

//   constructor() {
//     this.dataSource.data = TREE_DATA;
//   }

  // hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  constructor() { 
    this.categoryList.push({ 'id_f':1,'code_f': 'C_001','cat_name_f': 'Food','parent_id_f': 0 });
    this.categoryList.push({ 'id_f':2,'code_f': 'C_002','cat_name_f': 'Snack','parent_id_f':0 });
    this.categoryList.push({ 'id_f':3,'code_f': 'C_003','cat_name_f': 'Cool Drink ','parent_id_f': 1});
    this.categoryList.push({ 'id_f':4,'code_f': 'C_004','cat_name_f': 'Hot Drink','parent_id_f': 2 });
    this.categoryList.push({ 'id_f':5,'code_f': 'C_005','cat_name_f': 'Water' ,'parent_id_f': 1});

    this.parentCategory = this.categoryList;
  }

  ngOnInit() {
  }
  newCategory(): void{
    this.categoryInfo = {};
  }

  selectCategory(data): void{
    this.categoryInfo = data;
  }

  saveCategory(){
    console.log(this.categoryInfo);
    var resindex = this.categoryList.findIndex(x=> x.id_f == this.categoryInfo['id_f']);
    if(resindex < 0){
      this.categoryInfo["id_f"] = this.categoryList.length + 1;
      this.categoryList.push(this.categoryInfo);
    }else{
      this.categoryList[resindex] = this.categoryInfo;
    } 
    this.newCategory();
  }

  deleteCategory(): void{
    var resindex = this.categoryList.findIndex(x=> x.id_f == this.categoryInfo['id_f']);
    this.categoryList.splice(resindex, 1);
    this.newCategory();
  }

}
