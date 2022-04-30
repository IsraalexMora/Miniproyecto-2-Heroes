import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
  public video: string = "rx062e5pl-g";

  constructor() { }

  ngOnInit(): void {
  }

}
