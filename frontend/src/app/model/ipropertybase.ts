export interface IPropertyBase {
    Id: number;
    SellRent: number;
    Name: String;
    pType: string;
    fType: string;
    Type: String;
    Price: number;
    BHK: number;
    BuildArea: number;
    City: string;
    RTM: string
    Image?: string; //Optional field defined by Question mark (?)
}