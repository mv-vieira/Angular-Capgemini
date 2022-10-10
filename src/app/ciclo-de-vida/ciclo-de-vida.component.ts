import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnDestroy {

  horario = new Date();
  timer: any = null!;
  
  constructor() { }

  ngOnInit(): void {
    console.log("O evento OnInit disparou");

    this.timer = setInterval(() => this.horario = new Date(),1000);

  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

}
