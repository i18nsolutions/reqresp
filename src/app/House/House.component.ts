import { Component, OnInit } from '@angular/core';
import { AvailableServices } from './service-request-details';
import { HouseService } from 'app/House/house.service';





@Component({
  selector: 'app-House',
  templateUrl: './House.component.html',
  styleUrls: ['./House.component.scss'],
  providers: [HouseService]
})
export class HouseComponent implements OnInit {

  private availableServices: AvailableServices;

  availableServicesList: AvailableServices[] = [
    { serviceType: 'Plumbing' },
    { serviceType: 'Nursing' },
    { serviceType: 'Maid' },
    { serviceType: 'Electicalds' }
  ];
  private availableLocationList : string[];

  hopers: Object[];

  constructor(private houseService: HouseService) {
    this.availableServices = new AvailableServices();
    this.availableLocationList = ['Attur','Ammapet','Ayodhiyapattinam','Fairlands',
      'Govindampalayam','Gugai','Hasthampatti','Jagir Ammapalayam','Kitchipalayam'];
  }

  ngOnInit() {

    // TODO yet to delete thees records and fetch from the  backend service
    this.hopers = [
      { name: "Rinold", job: 'plumbing', rating: '5', available: 'yes', Location: 'Attur' },
      { name: "Manoj", job: 'Beautician', rating: '4', available: 'yes', Location: 'Ammapet' },
      { name: "Aiemen", job: 'Electrical', rating: '5', available: 'yes', Location: 'Ayodhiyapattinam' },
      { name: "Sneha", job: 'Nursing', rating: '5', available: 'yes', Location: 'Fairlands' },
    ]
  }

  onSubmit() {
    console.log(this.availableServices);
    this.houseService.get(this.availableServices);
  }

}



export class Hopers {

  private name: String;
  private discription: String;
  private id: number;
  private availableLocationList: string[];

  constructor(name: String, discr: String, id: number) {
    this.name = name;
    this.discription = discr;
    this.id = id;
   

  }
}



