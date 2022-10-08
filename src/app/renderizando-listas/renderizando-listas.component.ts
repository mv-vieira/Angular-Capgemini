import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  celulares: Celular[] = [
    {id: 1, nome:"Xiaomi S2", descricao:"Celular Chinês", valor: 1200, disponibilidade: true},
    {id: 2, nome:"Iphone 14S", descricao:"Celular Americano", valor: 15000, disponibilidade: true},
    {id: 3, nome:"Samsung Galaxy S22", valor: 5000, disponibilidade: false},
    {id: 4, nome:"Asus X", descricao:"Celular Americano", valor: 8000, disponibilidade: true}
  ]

  

}
