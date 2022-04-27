import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modules/usuarios/usuarios.model';
import { UsuariosService } from 'src/app/modules/usuarios/usuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuario: Usuario = {
    nombre: "",
    sexo: "",
    correo: "",
    fecha: new Date()
  }

  constructor(private servicioUsuarios: UsuariosService) { }

  ngOnInit(): void {
    this.usuario = this.servicioUsuarios.nuevoUsuario();
  }

  nuevoUsuario(): void {
    this.servicioUsuarios.agregarUsuario(this.usuario);
    this.usuario = this.servicioUsuarios.nuevoUsuario();
  }
}
