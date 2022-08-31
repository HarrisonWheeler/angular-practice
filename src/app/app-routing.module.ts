import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { HousesPageComponent } from './houses-page/houses-page.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';

const routes: Routes = [
  { path: 'cars', component: CarsPageComponent },
  { path: 'cars/:id', component: CarDetailsComponent },
  { path: 'jobs', component: JobsPageComponent },
  { path: 'houses', component: HousesPageComponent },
  { path: '', redirectTo: '', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
