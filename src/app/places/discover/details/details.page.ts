import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IonItemSliding, NavController } from "@ionic/angular";
import { IFetchedPathDetails, IFetchedPaths } from "../../places.model";
import { PlacesService } from "../../places.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"],
})
export class DetailsPage implements OnInit {
  rout: IFetchedPaths;
  paths: IFetchedPathDetails[];
  endPointCityName: string;
  startPointCityName: string;
  @Input() ways: Array<any>;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesSrv: PlacesService
  ) {}

  ngOnInit() {
  console.log('ways', this.ways);
    this.startPointCityName = this.placesSrv.startPointCity.name;
    this.endPointCityName = this.placesSrv.endPointCity.name;
   /*  this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("pathId")) {
        this.navCtrl.navigateBack("/places/tabs/offer");
        return;
      }
      this.rout = this.placesSrv.getPathDetail(paramMap.get("pathId"));
      this.paths = this.rout.direct_paths;
    }); */
  }

  onGoToMap(slidingItem: IonItemSliding){
   
      slidingItem.close();
  
      console.log('Editing item');
   
  }

  
 
}
