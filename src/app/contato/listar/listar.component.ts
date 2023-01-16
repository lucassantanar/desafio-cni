import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { child, get, getDatabase, ref } from '@firebase/database';
import { Contato } from 'src/app/model/contatoModel';
import { ContatoService } from '../shared/contato.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  listaContatos: any;

  constructor(
    private contatoService: ContatoService,
    private router: Router
    ) { }

  ngOnInit() {
    this.carregaLista();
  }

  async carregaLista() {
    var vm = this;
    vm.listaContatos = await vm.contatoService.listar().then((result) => {
      return Object.values(result);
    });
  }

  async remover(id: string) {
    var vm = this;
    vm.contatoService.remover(id);
    await vm.carregaLista();
  }

  async editar(contato: Contato) {
    var vm = this;
    this.contatoService.setContatoEditar(contato);
    this.router.navigate(['editar']);
  }
}
