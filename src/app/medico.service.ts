import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Medico } from './medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private getall = "http://localhost:8080/api/medi/show";

  private getOne = "http://localhost:8080/api/medi/one";
  constructor(private httpClient: HttpClient) { }

  getListMedicos():Observable<Medico[]>{
      return this.httpClient.get<Medico[]>(`${this.getall}`)
  }

  getMedico():Observable<Medico>{
    return this.httpClient.get<Medico>(`${this.getOne}`)
}
}
