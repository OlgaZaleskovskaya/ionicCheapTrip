import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Subscription } from "rxjs";
import { PlacesService } from "../../places.service";

@Component({
  selector: "app-offer",
  templateUrl: "./offer.page.html",
  styleUrls: ["./offer.page.scss"],
})
export class OfferPage implements OnInit {
  routs: Array<any>;
  paths: Subscription;

  constructor(
    private navCtrl: NavController,
    private placesSrv: PlacesService
  ) {}

  ngOnInit() {
    this.paths = this.placesSrv.pathsSubj$.subscribe((res) => {
      console.log("res offer", res);
      this.routs = res as Array<any>;
    });
    console.log(this.routs);
  }

  onGoBack() {
    this.navCtrl.navigateBack("places/tabs/discover");
  }
}
