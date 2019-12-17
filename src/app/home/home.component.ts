import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

// how many items are added 
  itemCounter:number;

  // adding string type data using input type in ngModel form 

  projectText:string=" Angular Project";

// list of adding items in array type 

  projects=[];


  constructor() { }

  ngOnInit() {

    this.itemCounter= this.projects.length;

  }

  // click the submit button added details to 

  addItems(){

    //push the data frpm array

    this.projects.push(this.projectText);

    this.projectText='';


    // updated item list

    this.itemCounter= this.projects.length;

  }


  removeItems(i){

    // removed the data from items 

    this.projects.splice(i,1);

    // update the item list

    this.itemCounter=this.projects.length;

  }

}
