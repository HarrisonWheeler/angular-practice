import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { HousesPageComponent } from './houses-page/houses-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CreateModalComponent,
    CarDetailsComponent,
    CarsPageComponent,
    JobsPageComponent,
    HousesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
