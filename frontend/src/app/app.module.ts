import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';  //HttpClientModule configures the dependency injectorfor http client that provide the methods for http requests
import {Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {TabsModule } from 'ngx-bootstrap/tabs'
import { ButtonsModule} from 'ngx-bootstrap/buttons'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
// import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import { AppComponent } from './app.component';
import { PropertyCardComponenet } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { from } from 'rxjs';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserServiceService } from './services/user-service.service';
import { AlertyfyService } from './services/alertyfy.service';
import { AuthService } from './services/auth.service';
import { PropertyDetailResolverService } from './property/property-detail/property-detail-resolver.service';




const appRoutes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'property-detail/:id', component: PropertyDetailComponent, resolve: {prp: PropertyDetailResolverService}},
  // Angular provides a way to define a dynamic variable in URL as above
  {path: 'user/register', component: UserRegisterComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: '**', component: PropertyListComponent},
]

@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponenet,
    PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailComponent,
      UserRegisterComponent,
      UserLoginComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,  //For Template Driven Form
    ReactiveFormsModule,  // For reactive form
    RouterModule.forRoot(appRoutes), 
    // BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot()
    // NgxGalleryModule
    
  ],
  providers: [HousingService,UserServiceService,AlertyfyService,AuthService,PropertyDetailResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
