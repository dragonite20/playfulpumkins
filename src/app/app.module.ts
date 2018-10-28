import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { ManualEntryComponent } from './manual-entry/manual-entry.component';
import { InformationComponent } from './information/information.component';
import { appRoutes } from './routes';
import { PurchaseConfirmationComponent } from './purchase-confirmation/purchase-confirmation.component';
import { PhotoComponent } from './photo/photo.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    NavBarComponent,
    InformationComponent,
    ManualEntryComponent,
    PurchaseConfirmationComponent,
    PhotoComponent,
    DashboardComponent
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
