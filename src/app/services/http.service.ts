import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';



const headerOption ={
  header : new HttpHeaders({

  })
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }


  getCountries = () :Observable<any> => {
    return this.http.get<any>(`https://restcountries.eu/rest/v2/region/europe`);
  }
}
