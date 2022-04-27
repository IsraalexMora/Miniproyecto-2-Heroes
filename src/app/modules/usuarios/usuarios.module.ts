import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from './usuarios.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    UsuariosService
  ]
})
export class UsuariosModule { }
