import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit{

  pacientes: Paciente[];

  constructor(private pacienteServicio:PacienteService){

  }
  ngOnInit(): void {
    this.pacienteServicio.getListPacientes().subscribe(data =>{
      this.pacientes=data;
  })

}

}
