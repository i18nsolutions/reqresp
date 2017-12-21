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
  constructor() { }
  hopers = ["plumbing","electrical","",34]
  ngOnInit() {
    this.hoper = new HoperDomain();
  }
  getUsetDetails(){
    console.log(this.hoper);
    // console.log(this.user);
   
    
  }
}
