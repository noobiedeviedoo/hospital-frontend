import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Paciente } from './paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  dataURL = "http://localhost:8080/api/paci/show"

  constructor(private httpClient: HttpClient) {  }
    
  getListPacientes(): Observable<Paciente[]>{
      return this.httpClient.get<Paciente[]>(`${this.dataURL}`);
 }


  }

