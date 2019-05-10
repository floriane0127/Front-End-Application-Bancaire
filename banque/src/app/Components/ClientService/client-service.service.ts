import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../../Model/banque';

const CLIENT_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public findAllClients(): Observable<any> {
    return this.http
    .get<Client>(CLIENT_SERVER + '/customer/all');
  }

  public saveNewClient(client: Client): Observable<any> {
    return this.http.post<Client>(CLIENT_SERVER + '/customer/addcli', JSON.stringify(client), this.httpOptions);
  }

  public updateClient(client: Client): Observable<any> {
    return this.http.put<Client>(CLIENT_SERVER + '/customer/' + client.id, JSON.stringify(client), this.httpOptions);
  }

  public deleteClient(client: Client): Observable<any> {
    return this.http.delete<Client>(CLIENT_SERVER + '/customer/' + client.id, this.httpOptions);
  }

  public findById(id: number): Observable<any> {
    return this.http.get<Client>(CLIENT_SERVER + '/customer/findById/' + id);
  }
}
