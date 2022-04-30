import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/modules/heroes/services/heroe';
import { HeroeService } from 'src/app/modules/heroes/services/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  @Input() heroe!: Heroe;

  constructor(public heroeService: HeroeService, public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = heroeService.getHeroe(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
