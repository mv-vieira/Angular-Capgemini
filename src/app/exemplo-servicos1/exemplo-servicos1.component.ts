import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos1',
  templateUrl: './exemplo-servicos1.component.html',
  styleUrls: ['./exemplo-servicos1.component.css']
})
export class ExemploServicos1Component implements OnInit {


  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  nome = "";

  adicionarNome(){
    this.logger.logar(`O nome ${this.nome} foi adicionado`)
  }
  
  
 

}
