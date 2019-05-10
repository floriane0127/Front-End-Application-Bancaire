import { Component, OnInit } from '@angular/core';
import { CptBancaire, Virement } from '../../Model/banque';
import { Router, ActivatedRoute } from '@angular/router';
import { CPTBancaireServiceService } from '../CptBancaire-service/cptbancaire-service.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent  {

  current_classes: any;
  current_styles: any;

  vir: Virement[];
  compte_bancaire: CptBancaire;

  constructor(private router: Router, private route: ActivatedRoute, private CptService: CPTBancaireServiceService) {
    this.current_classes = {'darkbg': false};
    this.current_classes = {'font-size': '150%'};

    this.compte_bancaire = CptBancaire.createBlank();
    
    this.findAllComptes();
  }

  

  public deleteButtonPressed(): void {
    this.CptService.deleteCompte(this.compte_bancaire).subscribe((response) => {
      this.router.navigateByUrl('client');
    }
    );
  }
    
    goBackButtonPressed(): void {
      this.router.navigateByUrl('client');
    }

  public findAllComptes(): void {
    this.CptService.findAllComptes().subscribe((response) => {
      console.log(response['_body'] );
      this.vir = response;
      console.log(this.vir);
    });
  }
}


