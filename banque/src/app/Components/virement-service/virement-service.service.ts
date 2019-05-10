import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Virement } from '../../Model/banque';


const VIR_SERVER = 'http://localhost:8034';

@Injectable({
  providedIn: 'root'
})

export class VirementServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public findAllVirements(): Observable<any> {
    return this.http.get<Virement>(VIR_SERVER + '/Virement/all');
  }

  public saveNewVirement(virement: Virement): Observable<any> {
    return this.http.post<Virement>(VIR_SERVER + '/Virement/addvirement', JSON.stringify(virement), this.httpOptions);
  }


  public deleteVirement(virement: Virement): Observable<any> {
    return this.http.delete<Virement>(VIR_SERVER + '/Virement/' + virement.id, this.httpOptions);
  }

  public findByIdRecepteur(id: number): Observable<any> {
    return this.http.get<Virement>(VIR_SERVER + '/Virement/all/' + id);
  }

  public findVirementById(id: number): Observable<any> {
    return this.http.get<Virement>(VIR_SERVER + '/Virement/findById/' + id);
  }

}
