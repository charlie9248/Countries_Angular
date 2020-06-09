import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryInfoComponent } from './components/country-info/country-info.component';





@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryInfoComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
