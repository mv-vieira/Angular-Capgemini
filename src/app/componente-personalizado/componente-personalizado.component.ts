import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-personalizado',
  templateUrl: './componente-personalizado.component.html',
  styleUrls: ['./componente-personalizado.component.css']
})
export class ComponentePersonalizadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() nome = "";
  @Input() sobrenome = "";

}
