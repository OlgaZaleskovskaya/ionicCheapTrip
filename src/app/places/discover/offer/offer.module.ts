import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatExpansionModule} from '@angular/material/expansion';

import { OfferPageRoutingModule } from './offer-routing.module';

import { OfferPage } from './offer.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsPage } from '../details/details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferPageRoutingModule, 
    SharedModule,
    MatExpansionModule
  ],
  declarations: [OfferPage, DetailsPage]
})
export class OfferPageModule {}
