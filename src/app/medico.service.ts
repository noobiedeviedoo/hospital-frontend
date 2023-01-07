import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Medico } from './medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private dataURL = "http://localhost:8080/api/medi/show";

  constructor(private httpClient: HttpClient) { }

  getListMedicos():Observable<Medico[]>{
      return this.httpClient.get<Medico[]>(`${this.dataURL}`)
  }

}
