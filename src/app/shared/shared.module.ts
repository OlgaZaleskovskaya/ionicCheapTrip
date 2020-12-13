import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { MatExpansionModule } from "@angular/material/expansion";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { MapModalComponent } from "./map-modal/map-modal.component";
import { LocationPickerComponent } from "./pickers/location-picker/location-picker.component";

@NgModule({
  declarations: [LocationPickerComponent, MapModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    MatExpansionModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [LocationPickerComponent, MapModalComponent, TranslateModule],
  entryComponents: [MapModalComponent],
})
export class SharedModule {}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
