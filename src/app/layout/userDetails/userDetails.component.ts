import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export class UserDetails{
  public name: string;
  public phone: number;
  public email: string;
  public need: any;
  public address: Address = new Address();
}
export class Address{
  public addressLine1: string;
  public street: string;
  public landmark: string;
  public zip:number;
}

@Component({
  selector: 'app-userDetails',
  templateUrl: './userDetails.component.html',
  styleUrls: ['./userDetails.component.scss']
})
export class UserDetailsComponent implements OnInit {
 public user: UserDetails;
  constructor() { }
  hopers = ["plumbing","electrical","",34]
  ngOnInit() {
    this.user = new UserDetails();
  }
  getUsetDetails(){
    console.log(this.user);
    // console.log(this.user);
   
    
  }
}
