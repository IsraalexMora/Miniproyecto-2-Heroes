import { Injectable } from '@angular/core';
import { Usuario } from './usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios: Usuario[] = [];

  constructor() {
    this.usuarios = JSON.parse(localStorage.getItem("usuarios") || '[]');
  }

  getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  agregarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  nuevoUsuario(): Usuario {
    return {
      nombre: '',
      sexo: '',
      correo: '',
      fecha: undefined
    };
  }
}
