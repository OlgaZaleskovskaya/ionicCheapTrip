import { Component, Input, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subscription } from "rxjs";
import { PlacesService } from "../places/places.service";

@Component({
  selector: "app-tools",
  templateUrl: "./tools.component.html",
  styleUrls: ["./tools.component.scss"],
})
export class ToolsComponent implements OnInit {
  currencyArr: string[];
  currentCurrency: string;
  language: string = "en";
  @Input() isHidden: boolean;

 currencyChangedSubscription:  Subscription;


  constructor(
    public placesSrv: PlacesService,
    public translate: TranslateService
  ) {
    translate.addLangs(["en", "ru"]);
    translate.setDefaultLang("en");
  }

  ngOnInit() {
    this.currencyArr =this.placesSrv.getCurrencyArray();
    this.currentCurrency = this.placesSrv.currentCurrency;
    console.log('current currency tools',this.currentCurrency );
    
   

    const lang = this.translate.getBrowserLang();

    if (!this.placesSrv.languageChanged) {
      switch (lang) {
        case "ru":
          this.translate.use("ru");
          this.placesSrv.setLanguage("ru", false);
          this.language = "ru";
          break;

        case "en":
          this.translate.use("en");
          this.placesSrv.setLanguage("en", false);
          break;
        default:
          this.translate.use("en");
          this.placesSrv.setLanguage("en", false);
          break;
      }
    } else {
      this.translate.use(this.placesSrv.currentLanguage);
    }
  }

  onSelectLang(lang: any) {
    this.translate.use(lang.detail.value);
    this.placesSrv.setLanguage(lang.detail.value, true);
  }

  onSelectCurrency(event: any) {
    const cur = event["detail"]["value"];
    console.log('selectedCurrency', cur);
    if (!this.isHidden) {
      this.placesSrv.getCurrencyRate(cur, false);
    }
    this.placesSrv.getCurrencyRate(cur, true);
  }
}
