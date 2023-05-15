import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/start/home.component';
import { ProductComponent } from './components/preise/product.component';
import { AboutComponent } from './components/about/about.component';
import { ReferenzenComponent } from './components/referenzen/referenzen.component';
import { ContactComponent } from './components/contact/contact.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { DatenschutzComponent } from './components/datenschutz/datenschutz.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: HomeComponent },
  { path: 'preise', component: ProductComponent },
  { path: 'ueber-uns', component: AboutComponent },
  { path: 'referenzen', component: ReferenzenComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutzerklaerung', component: DatenschutzComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
