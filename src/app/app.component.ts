import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContatoService } from './contato/shared/contato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'desafio-cni';
  listaContatos: any;
  carregaComponent: boolean = false;

  constructor(
    private contatoService: ContatoService,
    private router: Router
    ) { }

  ngOnInit() {
  } 
}
