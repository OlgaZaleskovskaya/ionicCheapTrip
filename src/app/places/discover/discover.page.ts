import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";

import { TranslateService } from "@ngx-translate/core";
import { AlertController, NavController } from "@ionic/angular";
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

  @ViewChild("ionInputStartElRef", { read: ElementRef })
  ionInputStartElRef: ElementRef;
  @ViewChild("ionInputEndElRef", { read: ElementRef })
  ionInputEndElRef: ElementRef;

  
  ignoreNextStartPointChange: boolean = false;
  ignoreNextEndPointChange: boolean = false;
  startPointCity: ICity = { id: -1, name: "" };
  endPointCity: ICity = { id: -1, name: "" };

  currencyArr: any;
  currentCurrency: string;language: string = "en";


  constructor(
    private placesSrv: PlacesService,
    private navCtrl: NavController,
    public translate: TranslateService,
    private alertCtrl: AlertController
  ) {
    translate.addLangs(["en", "ru"]);
    translate.setDefaultLang("en");
  }

  ngOnInit() {
    const lang = this.translate.getBrowserLang();
    this.currencyArr = this.placesSrv.getCurrencyArray();
    this.currencyArr= this.currencyArr.map(res => res['currencyName'])
  
    this.currentCurrency = this.placesSrv.currentCurrency;

    if (lang == "ru") {
      this.translate.use("ru");
      this.language = "ru";
    }

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
        this.ionInputStartElRef.nativeElement.querySelector("input").value = "";
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
        this.ionInputEndElRef.nativeElement.querySelector("input").value = "";
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
    console.log("on clear start point");
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

  toSearchPage() {
    this.navCtrl.navigateBack("/places/tabs/discover");
  }
 
 onSelectLang(lang: any) {
    this.translate.use(lang.detail.value);
  }
  onSelectCurrency(event: any) {
    const cur = event["detail"]["value"];
  
    this.placesSrv.getCurrencyRate(cur, true);
  }
}
