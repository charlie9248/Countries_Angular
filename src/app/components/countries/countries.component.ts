import { Component, OnInit , Input  , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  @Input() country;
  @Output() getCountry : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  findCountry = (countries) =>{
    this.getCountry.emit(countries);
  }

}
