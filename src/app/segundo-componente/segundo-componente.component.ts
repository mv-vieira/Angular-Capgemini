import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nome = "Matheus";

  dataNascimento = "1996-03-26";

}
