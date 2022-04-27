import { Injectable } from '@angular/core';
import { Heroe } from './heroe';
import heroes from '../../assets/json/heroes.json'

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  private heroes: Heroe[] = heroes;

  constructor() { }

  getHeroes(): Heroe[] {
    return this.heroes;
  }

  getHeroe(index: number): Heroe {
    return this.heroes[index];
  }

  searchHeroe(nomheroe: string): number {
    let index = this.heroes.findIndex(p => p.nombre === nomheroe);
    return index;
  }
}
