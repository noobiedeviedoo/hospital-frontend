import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPacienteComponent } from './add-paciente/add-paciente.component';
import { ListaMedicosComponent } from './lista-medicos/lista-medicos.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { SavePersonaComponent } from './save-persona/save-persona.component';

const routes: Routes = [

  //Rutas para saber cómo obtener los datos para las listas y controlar si están vacías
  {path:'',redirectTo:'medicos', pathMatch:'full'},
  //Rutas para las listas
  {path:'ListaMedicos', component:ListaMedicosComponent},
  {path:'ListaPacientes', component:ListaPacientesComponent},
  //ruta para añadir
  {path:'AddPaciente',component:AddPacienteComponent},
  //Ruta para guardar personas
  {path:'save-persona',component:SavePersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
