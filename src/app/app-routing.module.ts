import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HeroeComponent } from './components/heroe/heroe.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'buscar/:nombreh', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
