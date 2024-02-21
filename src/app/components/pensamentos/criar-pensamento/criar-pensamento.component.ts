import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 0,
    conteudo: 'Angular é muito bom!',
    autoria: 'Dev',
    modelo: '',
  };

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    console.log(this.pensamento);
  }

  cancelarPensamento() {
    console.log('Pensamento cancelado');
  }
}
