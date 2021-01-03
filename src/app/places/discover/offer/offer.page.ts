import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Subscription } from "rxjs";
import { ICity } from "../../places.model";
import { PlacesService } from "../../places.service";

@Component({
  selector: "app-offer",
  templateUrl: "./offer.page.html",
  styleUrls: ["./offer.page.scss"],
})
export class OfferPage implements OnInit {
  routs: Array<any>;
  paths: Subscription;
  currencyChanged: Subscription;
  startPointCity: ICity;
  endPointCity: ICity;
  isLoading: boolean;
  currentCurrency: string;

  constructor(
    private navCtrl: NavController,
    private placesSrv: PlacesService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.currentCurrency = this.placesSrv.currentCurrency;
    this.currencyChanged = this.placesSrv.currencyChanged$.subscribe(
      (res: { name: string; rate: number; previousRate: number }) => {
        this.currentCurrency = res.name;
        this.routs = this.recalculatePrice(res.rate, res.previousRate);
      }
    );

    this.paths = this.placesSrv.pathsSubj$.subscribe((res) => {
      this.startPointCity = this.placesSrv.startPointCity;
      this.endPointCity = this.placesSrv.endPointCity;
      this.routs = res as Array<any>;
      this.routs = this.routs.map((rout: any) => {
        return {
          ...rout,
          cities: this.getCities(rout),
          icons: this.getTransportTypes(rout),
        };
      });
      this.isLoading = false;
    });
  }

  toSearchPage() {
    this.navCtrl.navigateBack("places/tabs/discover");
  }

  private getCities(rout: { direct_paths: Array<any> }): any {
    const citiesSet = new Set<string>();

    rout.direct_paths.forEach((r: { from: string; to: string }) => {
      citiesSet.add(r.from);
      citiesSet.add(r.to);
    });

    return Array.from(citiesSet);
  }

  private getTransportTypes(rout: { direct_paths: Array<any> }): any {
    const transportIcons = rout.direct_paths.map((r: { imgUrl: string }) => {
      return r.imgUrl;
    });
    return transportIcons;
  }

  private recalculatePrice(rate: number, previousRate: number): Array<any> {
    return this.routs.map((rout) => {
      return {
        ...rout,
        euro_price: rout.euro_price * (rate / previousRate),
        direct_paths: rout.direct_paths.map((path) => {
          return {
            ...path,
            euro_price: path.euro_price * (rate / previousRate),
          };
        }),
      };
    });
  }
}
