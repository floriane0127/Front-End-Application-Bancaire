import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../Model/cv';


@Component({
  selector: 'app-donnees-perso',
  templateUrl: './donnees-perso.component.html',
  styleUrls: ['./donnees-perso.component.css']
})
export class DonneesPersoComponent {

  @Input()
  person: Person;

  constructor() { }

}
