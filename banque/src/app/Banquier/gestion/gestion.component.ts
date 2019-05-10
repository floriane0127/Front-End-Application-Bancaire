import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent {

  constructor(private router: Router) {}

  gestionClientPressed(): void {
    this.router.navigateByUrl('gestion-client');
  }

  gestionBanquierPressed(): void {
    this.router.navigateByUrl('gestion-banquier');
  }

  goBackButtonPressed(): void {
    this.router.navigateByUrl('banquier');
  }

}
