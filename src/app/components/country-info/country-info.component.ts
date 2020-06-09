import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {
  @Input()  county : any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.county)
  }

}
