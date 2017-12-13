import { Component, OnInit } from '@angular/core';
import {ServiceCategoryDetails} from './service-request-details';
import { HouseService } from 'app/House/house.service';





@Component({
  selector: 'app-House',
  templateUrl: './House.component.html',
  styleUrls: ['./House.component.scss'],
  providers : [HouseService]
})
export class HouseComponent implements OnInit {

private serviceCategoryDetails : ServiceCategoryDetails;

serviceRequestDetailList : ServiceCategoryDetails[] = [
  {serviceType:'Plumbing', location:'salem'},
  {serviceType:'Nursing', location:'salem'},
  {serviceType:'Maid', location:'salem'},
  {serviceType:'Electical', location:'salem'}  
];

  hopers: Object[];

  constructor(private houseService: HouseService ) {
    this.serviceCategoryDetails = new ServiceCategoryDetails();
   }

  ngOnInit() {
    this.hopers = [
      {name:"Rinold", job:'plumbing',rating:'5', available:'yes'},
      {name:"Manoj", job:'Beautician',rating:'4', available:'yes'},
      {name:"Aiemen", job:'Electrical',rating:'5', available:'yes'},
      {name:"Sneha", job:'Nursing',rating:'5', available:'yes'},
    ]
  }

  onSubmit(){
    console.log(this.serviceCategoryDetails);
    this.houseService.get(this.serviceCategoryDetails);
  }

}

 

export class Hopers{
  
    name:String;
    discription:String;
    id:number;
    constructor(name:String ,discr:String,id:number){
      this.name = name;
      this.discription = discr;
      this.id = id;
    }
  }

