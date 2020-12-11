import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ICity } from "../places.model";

import { PlacesService } from "../places.service";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"],
})
export class DiscoverPage implements OnInit, OnDestroy {
  startPointCitiesAvailable: boolean = false;
  endPointCitiesAvailable: boolean = false;
  startPointCities: ICity[] = [];
  endPointCities: ICity[] = [];
  cleanDataSubscription: Subscription;

  ignoreNextStartPointChange: boolean = false;
  ignoreNextEndPointChange: boolean = false;
  startPointCity: ICity = { id: -1, name: "" };
  endPointCity: ICity = { id: -1, name: "" };

  constructor(private placesSrv: PlacesService) {}

  ngOnInit() {
    this.placesSrv.getAllCities();

    this.cleanDataSubscription = this.placesSrv.cleanPathsSubj$.subscribe(
      (_res) => {
        this.onClearAll();
      }
    );
  }
  ngOnDestroy(): void {
    this.cleanDataSubscription.unsubscribe();
  }



  onStartPointSearchChange(event: any) {
    if (event.detail.value == "") {
      this.onClearStartPoint();
    }
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
    if (event.detail.value == "") {
      this.onClearEndPoint();
    }
    const substring = event.target.value;
    if (this.ignoreNextEndPointChange) {
      this.ignoreNextEndPointChange = false;
      this.endPointCitiesAvailable = false;
      return;
    }
    this.placesSrv.getEndPointAutocomplete(substring).subscribe((cities) => {
      this.endPointCities = cities;

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

  searchPath() {
    this.placesSrv.getPaths(this.startPointCity, this.endPointCity);
  }

  onClearStartPoint() {
    this.startPointCity = { id: -1, name: "" };
    this.ignoreNextStartPointChange = true;
    this.startPointCitiesAvailable = false;
    this.startPointCities = [];
  }

  onClearEndPoint() {
    this.endPointCity = { id: -1, name: "" };
    this.ignoreNextEndPointChange = true;
    this.endPointCitiesAvailable = false;
    this.endPointCities = [];
  }

  onClearAll() {
    this.onClearStartPoint();
    this.onClearEndPoint();
  }
}
