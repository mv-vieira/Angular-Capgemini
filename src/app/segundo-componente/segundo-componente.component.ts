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

  nome = "Matheus, usando pipe de uppercase";

  dataNascimento = "1996-03-26";

  urlImagem = "/assets/matheus.jpg";

  mostrarDataNascimento(){
    alert("A data de nascimento de matheus é: " + this.dataNascimento);
  }
}
