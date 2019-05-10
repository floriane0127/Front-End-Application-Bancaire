import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

const MESS_SERVER = 'http://localhost:8034';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public findAllMessages(): Observable<any> {
    return this.http
    .get<Message>(MESS_SERVER + '/msg/all');
  }

  public saveNewMessage(message: Message): Observable<any> {
    return this.http.post<Message>(MESS_SERVER + '/msg/addmsg', JSON.stringify(message), this.httpOptions);
  }

  public deleteMessage(message: Message): Observable<any> {
    return this.http.delete<Message>(MESS_SERVER + '/msg/' + message.id, this.httpOptions);
  }

  public findByIdRecepteur(id: number): Observable<any> {
    return this.http.get<Message>(MESS_SERVER + '/msg/all/' + id);
  }

  public findById(id: number): Observable<any> {
    return this.http.get<Message>(MESS_SERVER + '/msg/findById/' + id);
  }
}
