import { Persona } from './../persona';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent  implements OnInit{

  personas: Persona[];

  constructor(
    private personaServicio:PersonaService
  ){

  }
  ngOnInit():void{
    this.getAllPersonas();
    
  }

  private getAllPersonas(){
    this.personaServicio.getListPersonas().subscribe(data =>{
      this.personas=data;
    })
  }

}
