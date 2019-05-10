import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Banquier } from '../../Model/banque';

const BANQUE_SERVER = 'http://localhost:8034';

@Injectable({
  providedIn: 'root'
})

export class BanquierServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getAllBanquiers(): Observable<any> {
    return this.http
    .get<Banquier>(BANQUE_SERVER + '/bankister/all');
  }

  public saveNewBanquier(banquier: Banquier): Observable<any> {
    return this.http.post<Banquier>(BANQUE_SERVER + '/bankister/addbankist', JSON.stringify(banquier), this.httpOptions);
  }

  public updateBankist(banquier: Banquier): Observable<any> {
    return this.http.put<Banquier>(BANQUE_SERVER + '/bankister/' + banquier.id, JSON.stringify(banquier), this.httpOptions);
  }

  public deleteBankist(banquier: Banquier): Observable<any> {
    return this.http.delete<Banquier>(BANQUE_SERVER + '/bankister/' + banquier.id, this.httpOptions);
  }

  public findById(id: number): Observable<any> {
    return this.http.get<Banquier>(BANQUE_SERVER + '/bankister/findById/' + id);
  }
}

