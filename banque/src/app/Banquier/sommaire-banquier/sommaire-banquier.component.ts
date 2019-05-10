import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sommaire-banquier',
  templateUrl: './sommaire-banquier.component.html',
  styleUrls: ['./sommaire-banquier.component.css']
})
export class SommaireBanquierComponent {

  constructor(private router: Router) {}

  comptePressed(): void {
    this.router.navigateByUrl('compte');
  }

  gestionPressed(): void {
    this.router.navigateByUrl('gestion');
  }

  goBackButtonPressed(): void {
    this.router.navigateByUrl('bienvenue');
  }

}
