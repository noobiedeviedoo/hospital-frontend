import { Component, OnInit } from '@angular/core';
import { Medico } from '../medico';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrls: ['./lista-medicos.component.css']
})
export class ListaMedicosComponent implements OnInit{

  medicos: Medico[];

  constructor(
    private medicoServicio: MedicoService
  ){

  }

  ngOnInit():void{
    this.getAllMedicos();
  }

  private getAllMedicos(){
    this.medicoServicio.getListMedicos().subscribe(data =>{
      this.medicos=data;
    })
  }
}
