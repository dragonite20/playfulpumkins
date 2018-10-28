import { RouterModule, Routes } from '@angular/router';

import { ManualEntryComponent } from './manual-entry/manual-entry.component'
import { InformationComponent } from './information/information.component'
import { PurchaseConfirmationComponent } from './purchase-confirmation/purchase-confirmation.component'
import { DashboardComponent } from './dashboard/dashboard.component'

export const appRoutes: Routes = [
  { path: 'purchase-confirmation', component: PurchaseConfirmationComponent },
  { path: 'information', component: InformationComponent },
  { path: 'manual-entry', component: ManualEntryComponent },
  { path: 'dashboard', component: DashboardComponent  },
  { path: '**', redirectTo: '/manual-entry', pathMatch: 'full'}


];
