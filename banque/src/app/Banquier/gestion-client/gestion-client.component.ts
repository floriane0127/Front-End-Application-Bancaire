import { Component, OnInit } from '@angular/core';
import { Client } from '../../Model/banque';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientServiceService } from '../../Components/ClientService/client-service.service';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css']
})
export class GestionClientComponent {

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

  public findAllClients(): void {
    this.clientService.findAllClients().subscribe((response) => {
      console.log(response['_body'] );
      this.clients = response;
      console.log(this.clients);
    });
  }

  public addNewClientPressed(): void {
    this.router.navigateByUrl('add-client');
  }

  public editClientPressed(): void {
    this.router.navigateByUrl('add-client');
  }

  public deleteClientPressed(): void {
    this.clientService.deleteClient(this.client_banque).subscribe((response) => {
    this.router.navigateByUrl('gestion-client');
  });}


  goBackButtonPressed(): void {
    this.router.navigateByUrl('gestion');
  }

}
