import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../services/usuarios.model';
import { UsuariosService } from '../../services/usuarios.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
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
