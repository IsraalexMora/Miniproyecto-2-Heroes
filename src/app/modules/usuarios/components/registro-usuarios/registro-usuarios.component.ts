import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../services/usuarios.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
  public usuario: Usuario = {
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
