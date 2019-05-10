import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './Components/user/user.component';
import { SommaireBanquierComponent } from './Banquier/sommaire-banquier/sommaire-banquier.component';
import { SommaireClientComponent } from './Client/sommaire-client/sommaire-client.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RibComponent } from './client/rib/rib.component';
import { InfoPersoComponent } from './client/info-perso/info-perso.component';
import { EditInfoPersoComponent } from './client/edit-info-perso/edit-info-perso.component';

import { AddClientComponent } from './banquier/add-client/add-client.component';
import { GestionClientComponent } from './banquier/gestion-client/gestion-client.component';
import { GestionComponent } from './Banquier/gestion/gestion.component';
import { GestionBanquierComponent } from './Banquier/gestion-banquier/gestion-banquier.component';
import { CompteComponent } from './components/compte/compte.component';
import { ComptesBanquierComponent } from './banquier/comptes-banquier/comptes-banquier.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SommaireBanquierComponent,
    SommaireClientComponent,
    RibComponent,
    InfoPersoComponent,
    EditInfoPersoComponent,
    AddClientComponent,
    GestionClientComponent,
    GestionComponent,
    GestionBanquierComponent,
    CompteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'bienvenue',
        component: UserComponent
      },
      {
        path: 'client',
        component: SommaireClientComponent
      },
      {
        path: 'banquier',
        component: SommaireBanquierComponent
      },
      {
        path: 'editinfoperso',
        component: EditInfoPersoComponent
      },
      {
        path: 'infoperso',
        component: InfoPersoComponent
      },
      {
        path: 'rib',
        component: RibComponent
      },
      {
        path: 'gestion',
        component: GestionComponent
      },
      {
        path: 'gestion-client',
        component: GestionClientComponent
      },
      {
        path: 'gestion-banquier',
        component: GestionBanquierComponent
      },
      {
        path: 'compte',
        component: CompteComponent
      },
      {
        path: '',
        component: UserComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
