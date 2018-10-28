import { RouterModule, Routes } from '@angular/router';

import { ManualEntryComponent } from './manual-entry/manual-entry.component'
import { InformationComponent } from './information/information.component'
import { PurchaseConfirmationComponent } from './purchase-confirmation/purchase-confirmation.component'
import { PhotoComponent } from './photo/photo.component'

export const appRoutes: Routes = [
  { path: 'photo', component: PhotoComponent },
  { path: 'purchase-confirmation', component: PurchaseConfirmationComponent },
  { path: 'information', component: InformationComponent },
  { path: 'manual-entry', component: ManualEntryComponent },
  { path: '**', redirectTo: '/photo', pathMatch: 'full'}
];
