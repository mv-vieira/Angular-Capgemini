import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos2',
  templateUrl: './exemplo-servicos2.component.html',
  styleUrls: ['./exemplo-servicos2.component.css']
})
export class ExemploServicos2Component implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  adicionaProduto(){
    this.logger.logar("O produto " + this.produto + " foi cadastrado com sucesso")
  }

  exibeNomes(){
    this.logger.exibeTodosOsLogs();
  }

  produto = "";

}
