import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { Observable, of } from 'rxjs';
import { HousingService } from 'src/app/services/housing.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Property>{

constructor(
  private housingService: HousingService,
  private router: Router
  ) { }


resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Property>| Property {  //ActivatedRouteSnapshot used to access Route Parameter  //RouterStateSnapshot exposes the state of router at the moment
  const propId = route.params['id'];
  return this.housingService.getProperty(+propId).pipe( //.pipe to catch error
    catchError(error => {
      this.router.navigate(['/']);
      return of(null);
    })
  )
}




//The approach of calling subscribe directly causes a problem when an error occurs during load
//The page gets first displayed then an error is thrown. In order to overcome that we are using Service Resolver

}
