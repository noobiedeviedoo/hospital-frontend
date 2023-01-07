import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {


  private dataURL = "http://localhost:8080/api/req/personas";
  
  constructor(private httpClient: HttpClient) { }

    getListPersonas(): Observable<Persona[]>{
      return this.httpClient.get<Persona[]>(`${this.dataURL}`);
    }



}
