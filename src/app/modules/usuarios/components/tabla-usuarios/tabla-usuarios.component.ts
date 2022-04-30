import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../services/usuarios.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  public usuarios: Usuario[] = [];

  constructor(private servicioUsuarios: UsuariosService ) { }

  ngOnInit(): void {
    this.usuarios = this.servicioUsuarios.getUsuarios();
  }

}
