import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  pensamento = {
    conteudo: 'O importante não é vencer todos os dias, mas lutar sempre.',
    autoria: 'Waldemar Valle Martins',
    modelo: 'modelo3',
  };
  constructor() {}

  ngOnInit(): void {}
}
