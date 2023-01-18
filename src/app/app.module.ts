import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SavePersonaComponent } from './save-persona/save-persona.component';
import { ListaMedicosComponent } from './lista-medicos/lista-medicos.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddPacienteComponent } from './add-paciente/add-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    SavePersonaComponent,
    ListaMedicosComponent,
    ListaPacientesComponent,
    NavbarComponent,
    AddPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
