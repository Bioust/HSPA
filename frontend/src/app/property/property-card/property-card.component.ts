import { Component, Input, OnInit } from "@angular/core";
import { IProperty } from "../IProperty.interface";
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
    selector: 'app-property-card',
    // template: '<h1>My first app</h1>',
    templateUrl: 'property-card.component.html',
    // styles: ['h1 {color:red;}']
    styleUrls: ['property-card.component.css']
})
export class PropertyCardComponenet {
    @Input() property : IPropertyBase;  //To get data from the parent component
    @Input() hideIcons:  boolean;
    // property: any = {
    //     "Id" : 1,
    //     "Type" : "House",
    //     "Price" : "20,000",
    //     "Name" : "Building",
    // }

    

}