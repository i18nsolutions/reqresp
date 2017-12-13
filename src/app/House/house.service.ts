import { Injectable } from '@angular/core';
import {ServiceCategoryDetails} from './service-request-details';
import { Http } from '@angular/http/src/http';

// public  MockServiceRequestDetails: ServiceCategoryDetails[]

@Injectable()
export class HouseService {

constructor() { }

 get(serviceCategoryDetails:ServiceCategoryDetails){
     console.log("Get Service Called for ServiceCategoryDetails");
     console.log(serviceCategoryDetails);
     const url = "196.0.0.123:8080/houseServicerequest"
     
    // return this.http.get(url);
    // return MockServiceRequestDetails;
}

}