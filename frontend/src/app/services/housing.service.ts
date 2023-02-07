import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';
import { Property } from '../model/property';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map(propertiesArray => {
        // throw new Error('Some Error'); //to throw an error delibrately
        return propertiesArray.find(p=>p.Id===id);
      })
    );
  }

  getAllProperties(SellRent?: number):Observable<Property[]> {
    return this.http.get('data/properties.json').pipe(
    // this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<Property> = [];
        const localProperties = JSON.parse(localStorage.getItem('newProp'));
        if(localProperties) {
          for(const id in localProperties) {
            if(SellRent) {  //made sellRent variable optional and if it's present filter data based on sellRent else get all data from local storage
            if(localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) { 
            propertiesArray.push(localProperties[id]);
            }
          } else {
            propertiesArray.push(localProperties[id]);
          }
        }
        }
        for(const id in data) {
          if(SellRent) { 
          if(data.hasOwnProperty(id) && data[id].SellRent === SellRent) { 
          propertiesArray.push(data[id]);
          }
        } else {
          propertiesArray.push(data[id]);
        }
        }
        return propertiesArray;
      })
    );
    return this.http.get<Property[]>('data/propperties.json');
  }


  //Add new property in array if newProp already exists in local storage
  addProperty(property: Property) {
    let newProp = [property];
    if(localStorage.getItem('newProp')) {
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp'))]
    }
    localStorage.setItem('newProp',JSON.stringify(newProp));
  }

  newPropId() {   //Function to generate new property id
    if(localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1))  //local storage doesn't allow us to store value in number hence converted into string
      return +localStorage.getItem('PID');
    } else {
      localStorage.setItem('PID','101');
      return 101;
    }
  }
}
