import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/modules/heroes/services/heroe';
import { HeroeService } from 'src/app/modules/heroes/services/heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  misHeroes: Heroe[] = [];

  constructor(public miservicio: HeroeService) {
    console.log("Constructor de Heroes");
  }

  ngOnInit(): void {
    console.log("ngOnInit de Heroes");
    this.misHeroes = this.miservicio.getHeroes();
    console.log(this.misHeroes);
  }
}
