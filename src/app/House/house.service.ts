import { Injectable } from '@angular/core';
import {AvailableServices} from './service-request-details';
import { Http } from '@angular/http/src/http';

// public  MockServiceRequestDetails: AvailableServices[]

@Injectable()
export class HouseService {

constructor() { }

 get(availableServices:AvailableServices){
     console.log("Get Service Called for AvailableServices");
     console.log(availableServices);
     const url = "196.0.0.123:8080/houseServicerequest"
     
    // return this.http.get(url);
    // return MockServiceRequestDetails;
}

}