import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ICity } from "../places.model";

import { PlacesService } from "../places.service";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"],
})
export class DiscoverPage implements OnInit {
  //form: FormGroup;
  startPointCitiesAvailable: boolean = false;
  endPointCitiesAvailable: boolean = false;
  startPointCities: ICity[] = [];
  endPointCities: ICity[] = [];

  ignoreNextStartPointChange: boolean = false;
  ignoreNextEndPointChange: boolean = false;
  startPointCity: ICity = { id: -1, name: "" };
  endPointCity: ICity = { id: -1, name: "" };
  constructor(private placesSrv: PlacesService) {}

  ngOnInit() {
   this.placesSrv.getAllCities();
  }

  onSubmit() {}

  onCleanInput(input: string) {}

  onChangeFrom() {}

  onStartPointSearchChange(event: any) {
    const substring = event.target.value;
    if (this.ignoreNextStartPointChange) {
      this.ignoreNextStartPointChange = false;
      this.startPointCitiesAvailable = false;
      return;
    }
    this.placesSrv.getStartPointAutocomplete(substring).subscribe((cities) => {
      this.startPointCities = cities;
      if (cities.length > 0) {
        this.startPointCitiesAvailable = true;
      } else {
        this.startPointCitiesAvailable = false;
      }
    });
  }

  onEndPointSearchChange(event: any) {
    console.log('end');
    const substring = event.target.value;
    if (this.ignoreNextEndPointChange) {
      this.ignoreNextEndPointChange = false;
      this.endPointCitiesAvailable = false;
      return;
    }
    this.placesSrv.getEndPointAutocomplete(substring).subscribe((cities) => {
      this.endPointCities = cities;
      console.log('cities', cities);
      if (cities.length > 0) {
        this.endPointCitiesAvailable = true;
      } else {
        this.endPointCitiesAvailable = false;
      }
    });
  }



  startPointCitySelected(city: any): void {
    this.startPointCity = city;
    this.ignoreNextStartPointChange = true;
  }

  endPointCitySelected(city: any): void {
    this.endPointCity = city;
    this.ignoreNextEndPointChange = true;
  }


  searchPath(){
    this.placesSrv.getPaths(this.startPointCity, this.endPointCity);

  }
}
