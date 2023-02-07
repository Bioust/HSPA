import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Property } from 'src/app/model/property';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
// import {NgxGalleryImage} from '@kolkov/ngx-gallery';
// import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
// import { NgxGalleryOptions } from '@kolkov/ngx-gallery'

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public propertyId: number;
  property = new Property();
  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];
galleryImages:any=[];


imagess:any=[];
temp:any=[]
temp1=[];
  constructor(
    private route:ActivatedRoute, 
    private router:Router, 
    private housingService:HousingService,
    private http:HttpClient
    ) { }
  ngOnInit() {
    
    this.propertyId = Number(this.route.snapshot.params['id']);

    this.route.data.subscribe(
      (data: Property) => {
        this.property = data['prp']
      }
    )
    this.galleryImages = galleryImg.map(
      data=>{
        let index=0;
        this.temp.push(data)
        const abc = ({
          url: data.url
        })
        console.log(abc.url,"ABC")
        
        this.imagess.push(abc)
        // console.log(abc,"abc");
      }
    )
    
    this.temp.forEach(element => {
      console.log(element.url,"Elemet")

      if(element.url = this.route.snapshot.paramMap) {
        this.temp1.push(element)
      }
    });
    
    // console.log(this.temp1,this.imagess,"data");

    //Instead of the below code resolver is used above
    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: Property )=> {
    //         console.log(data,"Property")
    //         this.property = data;
    //       }, error => this.router.navigate(['/'])
    //     );
    //   }
    // )
    }
    

  //   this.galleryOptions = [
  //     {
  //       width: '600px',
  //       height: '400px',
  //       thumbnailsColumns: 4,
  //       imageAnimation: NgxGalleryAnimation.Slide
  //     },
  //     // max-width 800
  //     {
  //       breakpoint: 800,
  //       width: '100%',
  //       height: '600px',
  //       imagePercent: 80,
  //       thumbnailsPercent: 20,
  //       thumbnailsMargin: 20,
  //       thumbnailMargin: 20
  //     },
  //     // max-width 400
  //     {
  //       breakpoint: 400,
  //       preview: false
  //     }
  //   ];
  

  //   this.galleryImages = [
  //     {
  //       small: 'assets/imges/1-internal-1.jpg',
  //       medium: 'assets/imges/1-internal-2.jpg',
  //       big: 'assets/imges/1-internal-3.jpg'
  //     },
  //     {
  //       small: 'assets/imges/2-small.jpeg',
  //       medium: 'assets/imges/2-internal-2.jpg',
  //       big: 'assets/imges/2-internal-3.jpg'
  //     },
  //     {
  //       small: 'assets/imges/3-small.jpeg',
  //       medium: 'assets/imges/3-internal-2.jpg',
  //       big: 'assets/imges/3-internal-3.jpg'
  //     },{
  //       small: 'assets/imges/4-small.jpeg',
  //       medium: 'assets/imges/4-internal-2.jpg',
  //       big: 'assets/imges/4-internal-3.jpg'
  //     },
  //     {
  //       small: 'assets/imges/5-small.jpeg',
  //       medium: 'assets/imges/5-internal-2.jpg',
  //       big: 'assets/imges/5-internal-3.jpg'
  //     }
  //   ];
  // }

  // onSelectNext() {
  //   this.propertyId += 1;
  //   this.router.navigate(['property-detail', this.propertyId]);
  // }


  //RouterLink doesnot instiate the component if it's on same component i.e, doesnot refresh

}

const galleryImg = [
  {
    url: 'assets/images/internal-1.jpg',
  },
  {
    url: 'assets/images/internal-2.jpg',
  },
  {
    url: 'assets/images/internal-3.jpg',
  },
  {
    url: 'assets/images/internal-4.jpg',
  },
  {
    url: 'assets/images/internal-5.jpg',
  },
  {
    url: 'assets/images/internal-6.jpg',
  },
  {
    url: 'assets/images/internal-7.jpg',
  },
  {
    url: 'assets/images/internal-8.jpg',
  },


]
