import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
// import { IProperty } from '../IProperty.interface';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import { AlertyfyService } from 'src/app/services/alertyfy.service';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  // @ViewChild('form') addPropertyForm: NgForm;
  @ViewChild('formTabs', {static: true}) formTabs: TabsetComponent

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  direction: Array<string> = ['East', 'West', 'North', 'South'];

  addPropertyForm: FormGroup;
  nextClicked:boolean;
  property = new Property();

  // propertyView: IProperty = {
  propertyView: IPropertyBase = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    Type: null,
    fType: null,
    pType: null,
    BHK: null,
    City: null,
    RTM: null,
    BuildArea: null,
    Image: ''
  };

  constructor(
    private fb:FormBuilder ,
    private router: Router,
    private alertyfyService: AlertyfyService,
    private housingService: HousingService
    ) { }

  ngOnInit() {
    this.createAddPropertyForm();
  }

  createAddPropertyForm() {
    this.addPropertyForm = this.fb.group({

      BasicInfo: this.fb.group({
        SellRent: ['1' , Validators.required],
        BHK: [null, Validators.required],
        pType: [null, Validators.required],
        fType: [null, Validators.required],
        Name: [null, Validators.required],
        City: [null, Validators.required]
    }),

    PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuildArea: [null, Validators.required],
        CarpetArea: [null],
        Security: [0],
        Maintenance: [0],
    }),

    AddressInfo: this.fb.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null, Validators.required],
        LandMark: [null],
    }),

    OtherInfo: this.fb.group({
        RTM: [null, Validators.required],
        Possession: [null, Validators.required],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null]
    })
    });
  }

  onBack() {

    this.router.navigate(['/']);    //issue with dependencies and hence used <any> otherwise use this.router.navigate()
  }

  onSubmit() {
    this.nextClicked =true;
    if(this.checkValidationOfTabs()) {
      debugger;
      this.mapProperties();
      this.housingService.addProperty(this.property);
      this.alertyfyService.success("Congrats. Your property listed sucessfully on our website");
      if(this.SellRent.value == 2) {
        this.router.navigate(['/rent-properties'])
      }
    } else {
      this.alertyfyService.error("Please review the form and provide all necessary entries");
      this.router.navigate(['/'])
    }
    
  }

  mapProperties():void {
    //For smaller forms it's OK to pass form data directly to the service and store it in Local storage or Database
    //For bigger forms there are many fields we just need to display on form and not required to store on database 
    //We need to create a function to map the required property of an object to the data user is submitting through form like this
        this.property.Id = this.housingService.newPropId();
        this.property.SellRent = +this.SellRent.value;
        this.property.BHK = this.BHK.value;
        this.property.propertyTypeId = this.pType.value;
        this.property.Name = this.Name.value;
        this.property.CityId = this.City.value;
        this.property.furnishingTypeId = this.fType.value;
        this.property.Price = this.Price.value;
        this.property.Security = this.Security.value;
        this.property.Maintenance = this.Maintenance.value;
        this.property.BuildArea = this.BuildArea.value;
        this.property.CarpetArea = this.CarpetArea.value;
        this.property.FloorNo = this.FloorNo.value;
        this.property.TotalFloors = this.TotalFloor.value;
        this.property.Address = this.Address.value;
        this.property.Address2 = this.LandMark.value;
        this.property.ReadyToMove = this.RTM.value;
        this.property.Gated = this.Gated.value;
        this.property.MainEntrance = this.MainEntrance.value;
        // this.property.estPossessionOn = this.datePipe.transform(this.PossessionOn.value,'MM/dd/yyyy');
        // this.property.PossessionOn = this.PossessionOn.value;
        this.property.PostedOn = new Date().toString();
        this.property.Description = this.Description.value;
        this.property.Possession = this.Possession.value;
        this.property.MainEntrance = this.MainEntrance.value;
  }

  selectTab(nextTabId: number, isCurrentTabIsValid:boolean) {
    this.nextClicked = true;
    if(isCurrentTabIsValid) {
      this.formTabs.tabs[nextTabId].active = true;
    }
  }

  checkValidationOfTabs(): boolean {
    if(this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return false;
    }
    if(this.PriceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return false;
    }
    if(this.AddressInfo.invalid) {
      this.formTabs.tabs[2].active = true;
      return false;
    }
    if(this.OtherInfo.invalid) {
      this.formTabs.tabs[3].active = true;
      return false;
    }
    return true;
  }

//#getter Methods to make code in the html shorter
  // #BasicInfo getter methods <Form Control and their associated fields> 
  
    get BasicInfo() {
      return this.addPropertyForm.controls.BasicInfo as FormGroup;
    }

    get SellRent() {
      return this.BasicInfo.controls.SellRent as FormControl;
    }
    get BHK() {
      return this.BasicInfo.controls.BHK as FormControl;
    }
    get pType() {
      return this.BasicInfo.controls.pType as FormControl;
    }
    get fType() {
      return this.BasicInfo.controls.fType as FormControl;
    }
    get Name() {
      return this.BasicInfo.controls.Name as FormControl;
    }
    get City() {
      return this.BasicInfo.controls.City as FormControl;
    }
  //#end BasicInfo getter methods

  // getter Methods to make code in the html shorter

//#PriceInfo getter methods

 get PriceInfo() {
    return this.addPropertyForm.controls.PriceInfo as FormGroup
  }

  get Price() {
    return this.PriceInfo.controls.Price as FormControl
  }
  get BuildArea() {
    return this.PriceInfo.controls.BuildArea as FormControl;
  }
  get CarpetArea() {
    return this.PriceInfo.controls.CarpetArea as FormControl;
 }

 get Security() {
    return this.PriceInfo.controls.Security as FormControl;
 }

 get Maintenance() {
    return this.PriceInfo.controls.Maintenance as FormControl;
}
//#End PriceInfo getter methods
  get AddressInfo() {
    return this.addPropertyForm.controls.AddressInfo as FormGroup
  }
  get FloorNo() {
    return this.AddressInfo.controls.FloorNo as FormControl;
}

get TotalFloor() {
    return this.AddressInfo.controls.TotalFloor as FormControl;
}

get Address() {
    return this.AddressInfo.controls.Address as FormControl;
}

get LandMark() {
    return this.AddressInfo.controls.LandMark as FormControl;
}

  get OtherInfo() {
    return this.addPropertyForm.controls.OtherInfo as FormGroup
  }
  get RTM() {
    return this.OtherInfo.controls.RTM as FormControl;
}

get PossessionOn() {
    return this.OtherInfo.controls.PossessionOn as FormControl;
}
get Possession() {
  return this.OtherInfo.controls.Possession as FormControl;
}

get AOP() {
    return this.OtherInfo.controls.AOP as FormControl;
}

get Gated() {
    return this.OtherInfo.controls.Gated as FormControl;
}

get MainEntrance() {
    return this.OtherInfo.controls.MainEntrance as FormControl;
}

get Description() {
    return this.OtherInfo.controls.Description as FormControl;
}

}
