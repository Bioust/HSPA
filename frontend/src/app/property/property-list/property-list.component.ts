import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private housingService: HousingService, private route:ActivatedRoute) { }
  properties: Array<IProperty>;
  SellRent: number = 1;

  ngOnInit():void {
    if(this.route.snapshot.url.toString() != '') {
      this.SellRent = 2;  //Means we are on Rent property URL else we are on base URL
    } 
    this.housingService.getAllProperties(this.SellRent).subscribe(     //get() metod returns an observable
      data=>{                                             //Observalbles are the mechanism to pass the data between different parts of the application and is
            this.properties = data;                       // a recommended technique to data get data in asynchronous calls

            // const newProperty = JSON.parse(localStorage.getItem('newProp'));
            // if(newProperty.SellRent == this.SellRent) {
            //   this.properties = [newProperty, ...this.properties];   //If property exists add new property to the existing properties Array
            // }
            console.log(this.route.snapshot.url.toString());
          }, error => {                                   //Observable functions are not executed untill a consumer subscribe to it
            console.log(error);                           //Get method is not executed if used alone. Subscribe method is used to recieve the response return by get method
          }
        );
  }
}
