import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalCVComponent } from './global-cv/global-cv.component';
import { DonneesPersoComponent } from './donnees-perso/donnees-perso.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalCVComponent,
    DonneesPersoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
