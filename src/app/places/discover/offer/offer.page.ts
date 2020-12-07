import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Subscription } from "rxjs";
import { ICity } from '../../places.model';
import { PlacesService } from "../../places.service";

@Component({
  selector: "app-offer",
  templateUrl: "./offer.page.html",
  styleUrls: ["./offer.page.scss"],
})
export class OfferPage implements OnInit {
  routs: Array<any>;
  paths: Subscription;
  startPointCity: ICity;
  endPointCity: ICity;
  isLoading: boolean;

  constructor(
    private navCtrl: NavController,
    private placesSrv: PlacesService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.paths = this.placesSrv.pathsSubj$.subscribe((res) => {
   this.startPointCity = this.placesSrv.startPointCity;
   this.endPointCity = this.placesSrv.endPointCity;
      this.routs = res as Array<any>;
      console.log('ROUTS', this.routs);
     this.isLoading = false;
    });
  
  }

  onGoBack() {
    this.navCtrl.navigateBack("places/tabs/discover");
  }
}
