import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sommaire-client',
  templateUrl: './sommaire-client.component.html',
  styleUrls: ['./sommaire-client.component.css']
})
export class SommaireClientComponent {

  constructor(private router: Router) {}

  comptePressed(): void {
    this.router.navigateByUrl('compte');
  }

  infoPersoPressed(): void {
    this.router.navigateByUrl('infoperso');
  }
  ribPressed(): void {
    this.router.navigateByUrl('rib');
  }

  goBackButtonPressed(): void {
    this.router.navigateByUrl('bienvenue');
  }

}
