import { Component } from "@angular/core";

@Component({
    selector: 'app-property-card',
    // template: '<h1>My first app</h1>',
    templateUrl: 'property-card.component.html',
    // styles: ['h1 {color:red;}']
    styleUrls: ['property-card.component.css']
})
export class PropertyCardComponenet {
    property: any = {
        "Id" : 1,
        "Type" : "House",
        "Price" : "20,000",
        "Name" : "Building",
    }

}