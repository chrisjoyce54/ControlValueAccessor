import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { AddressInfoComponent } from './address-info/address-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicInfoComponent,
    AddressInfoComponent,
    BillingInfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
