import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { HistoriaComponent } from './components/historia/historia.component';
import { ValidarVideoPipe } from './components/historia/validar-video.pipe';
import { ColeccionablesComponent } from './components/coleccionables/coleccionables.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    HeroesComponent,
    AcercaComponent,
    HeroeComponent,
    BuscarComponent,
    HistoriaComponent,
    ValidarVideoPipe,
    ColeccionablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
