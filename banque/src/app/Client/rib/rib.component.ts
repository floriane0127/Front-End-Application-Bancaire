import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientServiceService } from '../../Components/ClientService/client-service.service';
import { Client, CptBancaire } from '../../Model/banque';



@Component({
  selector: 'app-rib',
  templateUrl: './rib.component.html',
  styleUrls: ['./rib.component.css']
})
export class RibComponent {

  current_classes: any;
  current_styles: any;

  clients: CptBancaire[];
  client_banque: Client;

  constructor(private router: Router, private route: ActivatedRoute, private clientService: ClientServiceService) {
    this.current_classes = { 'darkbg': false };
    this.current_classes = { 'font-size': '150%' };

    this.client_banque = Client.createBlank();

    this.findCustomerById(1);
    //this.findAllClients();
  }

  public findAllClients(): void {
    this.clientService.findAllClients().subscribe((response) => {
      console.log(response['_body']);
      this.clients = response;
      console.log(this.clients);
    });
  }


  public findCustomerById(customerId: number): void {
    this.clientService.findById(customerId).subscribe(
      (Response) => {
        this.client_banque = Response;
      }
    );
  }

  goBackButtonPressed(): void {
    this.router.navigateByUrl('client');
  }

}
