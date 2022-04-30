import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from './services/usuarios.service';
import { RegistroComponent } from './components/registro/registro.component';
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
    RegistroComponent,
    TablaUsuariosComponent
  ],
  exports: [
    RegistroComponent
  ]
})
export class UsuariosModule { }
