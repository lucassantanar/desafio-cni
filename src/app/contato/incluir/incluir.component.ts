import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contato } from 'src/app/model/contatoModel';
import { ContatoService } from '../shared/contato.service';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {
  
  constructor(
    private contatoService: ContatoService,
    private router: Router
  ) { }

  cadastroForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    idade: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    profissao: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });

  ngOnInit(): void {
  }

  cadastraContato() {
    var vm = this;
    if(!vm.cadastroForm.valid) {
      return;
    }
    var contato: Contato = new Contato();
    contato.nome = vm.cadastroForm.value.nome;
    contato.endereco = vm.cadastroForm.value.endereco;
    contato.idade = vm.cadastroForm.value.idade;
    contato.profissao = vm.cadastroForm.value.profissao;
    contato.email = vm.cadastroForm.value.email;

    vm.contatoService.incluir(contato);
    vm.router.navigate(['']);
  }

  voltar() {
    var vm = this;
    vm.router.navigate(['']);
  }

}
