import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CptBancaire } from '../../Model/banque';

const COMPTE_SERVER = 'http://localhost:8034';

@Injectable({
  providedIn: 'root'
})
export class CPTBancaireServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public findAllComptes(): Observable<any> {
    return this.http
    .get<CptBancaire>(COMPTE_SERVER + '/Compte_Bancaire/all');
  }

  public saveNewCompte(compte: CptBancaire): Observable<any> {
    return this.http.post<CptBancaire>(COMPTE_SERVER + '/Compte_Bancaire/' + compte.id, JSON.stringify(compte), this.httpOptions);
  }

  public updateCompte(compte: CptBancaire): Observable<any> {
    return this.http.post<CptBancaire>(COMPTE_SERVER + '/Compte_Bancaire/' + compte.id, JSON.stringify(compte), this.httpOptions);
  }

  public deleteCompte(compte: CptBancaire): Observable<any> {
    return this.http.delete<CptBancaire>(COMPTE_SERVER + '/Compte_Bancaire/' + compte.id, this.httpOptions);
  }

  public findCompteById(id: number): Observable<any> {
    return this.http.get<CptBancaire>(COMPTE_SERVER + '/Compte_Bancaire/findById/' + id);
  }
}
