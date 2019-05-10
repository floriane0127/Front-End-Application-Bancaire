import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientServiceService } from '../../Components/ClientService/client-service.service';
import { Client } from '../../Model/banque';

@Component({
  selector: 'app-info-perso',
  templateUrl: './info-perso.component.html',
  styleUrls: ['./info-perso.component.css']
})
export class InfoPersoComponent {
  current_classes: any;
  current_styles: any;

  clients: Client[];
  client_banque: Client;

  constructor(private router: Router, private route: ActivatedRoute, private clientService: ClientServiceService) {
    this.current_classes = {'darkbg': false};
    this.current_classes = {'font-size': '150%'};

    this.client_banque = Client.createBlank();
    
    this.findAllClients();
  }

    public editButtonPressed(): void {
      this.router.navigateByUrl('editinfoperso');
    }
    
    goBackButtonPressed(): void {
      this.router.navigateByUrl('client');
    }

  public findAllClients(): void {
    this.clientService.findAllClients().subscribe((response) => {
      console.log(response['_body'] );
      this.clients = response;
      console.log(this.clients);
    });
  }
}


