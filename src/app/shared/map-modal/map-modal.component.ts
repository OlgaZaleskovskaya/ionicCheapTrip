import { localizedString } from '@angular/compiler/src/output/output_ast';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { ModalController } from "@ionic/angular";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-map-modal",
  templateUrl: "./map-modal.component.html",
  styleUrls: ["./map-modal.component.scss"],
})
export class MapModalComponent implements OnInit, AfterViewInit {
  @ViewChild("map") mapElementRef: ElementRef;
  mapModule: any;

  constructor(
    private modalCtrl: ModalController,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.getGoogleMaps()
      .then((googleMaps) => {
        const mapEl = this.mapElementRef.nativeElement;
   
        const map = googleMaps.Map(mapEl, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 16,
        });

        
        googleMaps.event.addListenerOnce(map, "idle", () => {
          this.renderer.addClass(mapEl, "visible");
        });

        map.addListener('click', event => {
          const coord = {
            lat: event.latLng.lan(),
            lng: event.latLng.lng(),
          }
        })
      })
      .catch((err) => console.log(err));
  }


  


  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss();
  }



  private getGoogleMaps(): Promise<any> {
    const win = window as any;
    const googleModule = win.google;
    if (googleModule && googleModule.maps) {
      return Promise.resolve(googleModule.maps);
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyCdii-DleUQKC5ZN0WXXdta73zNTcUW7gM";
      script.defer = true;
      script.async = true;
      document.body.append(script);
      script.onload = () => {
        const loadedGoogleModule = win.google;

        if (loadedGoogleModule && loadedGoogleModule) {
          resolve(loadedGoogleModule.maps);
        } else {
          reject("Google maps SDK not available");
        }
      };
    });
  }
}
