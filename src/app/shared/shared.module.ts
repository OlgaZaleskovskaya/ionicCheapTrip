import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import {MatExpansionModule} from '@angular/material/expansion';

import { MapModalComponent } from './map-modal/map-modal.component';
import { LocationPickerComponent } from './pickers/location-picker/location-picker.component';

@NgModule({
    declarations: [LocationPickerComponent, MapModalComponent],
    imports: [CommonModule, IonicModule,   MatExpansionModule ],
    exports:[LocationPickerComponent, MapModalComponent],
    entryComponents: [MapModalComponent]

})
export class SharedModule{}