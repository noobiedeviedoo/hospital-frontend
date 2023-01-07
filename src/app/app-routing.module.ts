import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMedicosComponent } from './lista-medicos/lista-medicos.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { SavePersonaComponent } from './save-persona/save-persona.component';

const routes: Routes = [

  //Rutas para saber cómo obtener los datos para las listas y controlar si están vacías
  {path:'',redirectTo:'personas', pathMatch:'full'},
  //Rutas para las listas
  {path:'personas', component:ListaPersonasComponent},
  {path:'medicos', component:ListaMedicosComponent},
  {path:'pacientes', component:ListaPacientesComponent},
  //Ruta para guardar personas
  {path:'save-persona',component:SavePersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
