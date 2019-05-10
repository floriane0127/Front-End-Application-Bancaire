import { Component, OnInit } from '@angular/core';
import { Banquier } from '../../Model/banque';
import { Router, ActivatedRoute } from '@angular/router';
import { BanquierServiceService } from '../../Components/BanquierService/banquier-service.service';

@Component({
  selector: 'app-gestion-banquier',
  templateUrl: './gestion-banquier.component.html',
  styleUrls: ['./gestion-banquier.component.css']
})
export class GestionBanquierComponent {

  current_classes: any;
  current_styles: any;

  banquiers: Banquier[];
  banquier_banque: Banquier;

  constructor(private router: Router, private route: ActivatedRoute, private banquierService: BanquierServiceService) {
    this.current_classes = {'darkbg': false};
    this.current_classes = {'font-size': '150%'};

    this.banquier_banque = Banquier.createBlank();

    this.getAllBanquiers();
  }

  public getAllBanquiers(): void {
    this.banquierService.getAllBanquiers().subscribe((response) => {
      console.log(response['_body'] );
      this.banquiers = response;
      console.log(this.banquiers);
    });
  }

  goBackButtonPressed(): void {
    this.router.navigateByUrl('gestion');
  }



}
