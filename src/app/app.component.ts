import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router} from '@angular/router';
import { HttpService } from './services/http.service';
import { isNullOrUndefined } from 'util';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  countries:any[];
  county:{}

  constructor(private http : HttpService , private router : Router){

  }
  
  ngOnInit(){
    this.http.getCountries().subscribe(data=>{
      this.countries= data;
      this.county = data[0];
    },err=>{
      console.log(err.message);
    })
  }


  getCountry = (country) =>{
    const tt = this.countries.find(selectedcountry => selectedcountry.area === country.area)
    console.log(tt);
    this.county = tt;
  }

  isSomeValueDefined(): boolean {
    return isNullOrUndefined(this.county)
  }



 
  


}
