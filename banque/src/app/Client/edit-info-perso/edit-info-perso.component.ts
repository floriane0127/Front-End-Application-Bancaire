import { Component, OnInit } from '@angular/core';
import { Client } from '../../Model/banque';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ClientServiceService } from '../../Components/ClientService/client-service.service';

@Component({
  selector: 'app-edit-info-perso',
  templateUrl: './edit-info-perso.component.html',
  styleUrls: ['./edit-info-perso.component.css']
})
export class EditInfoPersoComponent implements OnInit {

  client_banque: Client;

  constructor(private router: Router, private clientService: ClientServiceService, private route: ActivatedRoute) {
    this.client_banque = Client.createBlank();
    console.log(this.client_banque);
  }

  mode_access: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('client_id') != null) {
        console.log(params.get('client_id'));
        this.mode_access = 'MODIFICATION';
        this.clientService.findById(parseInt(params.get('client_id'), 10)).subscribe((response) => {
          this.client_banque = response;
      });
    } else {
      this.mode_access = 'AJOUT';
      console.log('Good');
    }
  });
  }

  public updateClient(client: Client): void {
    this.clientService.updateClient(client).subscribe((response) => {
      this.router.navigateByUrl('infoperso');
    }
   );
  }

  public saveNewClient(client: Client): void {
    this.clientService.saveNewClient(client).subscribe((response) => {
      this.router.navigateByUrl('infoperso');
    }
   );
  }


public addUpdateClientClicked(): void {
  if (this.mode_access === 'MODIFICATION') {
    this.updateClient(this.client_banque);
  } else {
    this.saveNewClient(this.client_banque);
  }
}
}




