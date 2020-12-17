import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { IonicModule } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';


import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    SharedModule

  ],
  declarations: [ContactPage],
  providers: [
  CallNumber,
  EmailComposer]
 
})
export class ContactPageModule {}
