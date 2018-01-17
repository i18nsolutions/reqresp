import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HoperDomain} from './hoper.domain';

@Component({
  selector: 'app-userDetails',
  templateUrl: './hoper-details.component.html',
  styleUrls: ['./hoper-details.component.scss']
})
export class HoperDetailsComponent implements OnInit {
 public hoper: HoperDomain;
 private availableLocationList: string[];
  constructor() { 
     this.hoper = new HoperDomain();
     this.availableLocationList = ['Attur','Ammapet','Ayodhiyapattinam','Fairlands',
      'Govindampalayam','Gugai','Hasthampatti','Jagir Ammapalayam','Kitchipalayam'];
    }

  // hopers = ["plumbing","electrical","",34]
  ngOnInit() {
   
  }
  getUsetDetails(){
    console.log(this.hoper);
    // console.log(this.user);
   
  }

  onSubmit(){
    console.log(this.hoper);
  }
}
