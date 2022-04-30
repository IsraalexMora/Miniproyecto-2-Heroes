import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from './services/usuarios.service';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    UsuariosService
  ],
  declarations: [
    RegistroUsuariosComponent,
    TablaUsuariosComponent
  ],
  exports: [
    RegistroUsuariosComponent
  ]
})
export class UsuariosModule { }
