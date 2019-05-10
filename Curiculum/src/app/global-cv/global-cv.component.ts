import { Component, OnInit } from '@angular/core';
import { Cv } from '../Model/cv';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-cv',
  templateUrl: './global-cv.component.html',
  styleUrls: ['./global-cv.component.css']
})
export class GlobalCVComponent implements OnInit {

  cv: Cv;

  constructor(private router: Router) {
    this.cv =
        Cv.CVFromJSON({
          libelle: 'CV Devoloppeur',
          id: 1,
          person: {
          nom: 'Meignen',
          prenom: 'Floriane',
          date_De_Naissance: '11 mai 1992',
          description: 'CDI en tant que Developpeur Informatique Maitrise de JAVA, MySQL, HTML, JSP Servlet, JPA, Hibernate, Spring Boot, Data, Security, Web Service: REST et SOAP, Angular 7'
        }
      })
      ;

      console.log(this.cv);
  }


  ngOnInit() {
  }

  //userClickedOnExperience(recipe_id): void {
  // this.router.navigateByUrl('/recipes/' + recipe_id);
  // }


}
