import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-contratar',
  templateUrl: './contratar.component.html',
  styleUrls: ['./contratar.component.css']
})
export class ContratarComponent implements OnInit {

  data = new Date();
  horas = this.data.getHours() + ":" + this.data.getMinutes()
  constructor() { }

  ngOnInit(): void {
  }

}
