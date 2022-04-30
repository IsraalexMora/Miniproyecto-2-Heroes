import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/modules/heroes/services/heroe';
import { HeroeService } from 'src/app/modules/heroes/services/heroe.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  
  public nombreh: string = "";
  public indice: number = 0;
  public miheroe: Heroe = {
    nombre: "",
    bio: "",
    img: "",
    aparicion: "",
    casa: ""
  }
  
  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.nombreh = params['nombreh'];
      this.indice = this.heroeService.searchHeroe(this.nombreh);
      console.log(this.indice);

      if (this.indice != -1) {
        this.miheroe = this.heroeService.getHeroe(this.indice);
      } else {
        setTimeout(() => {
          this.router.navigate(['/heroes'])
        }, 3000);
      }
    });
  }

  ngOnInit(): void {
  }
}