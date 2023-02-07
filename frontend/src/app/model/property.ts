import { IPropertyBase } from './ipropertybase';

export class Property implements IPropertyBase {
    Id: number;
    SellRent: number;
    Name: string;
    pType: string;
    fType: string;  //Property Type
    Type: String;   //Furishing Type
    Price: number;
    BHK: number;
    BuildArea: number;
    City: string;
    RTM: string;     //Variable for whether a property is ready to move or not
    AOP: string;    //Age of property
    propertyTypeId: number;
    propertyType: string;
    // bhk: number;
    furnishingTypeId: number;
    furnishingType: string;
    // BuildArea: number;
    CarpetArea?: number;
    Address: string;
    Address2?: string;
    CityId: number;
    FloorNo?: string;
    TotalFloors?: string;
    ReadyToMove: boolean;
    Age?: string;
    MainEntrance?: string;
    Security?: number;
    Gated?: boolean;
    Maintenance?: number;
    EstPossessionOn?: string;
    Possession: string;
    PostedOn:string;
    Photo?: string;
    Description?: string;
    // photos?: Photo[];
    Image?: string;
    Posession: string;
}