import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contato } from 'src/app/model/contatoModel';
import { ContatoService } from '../shared/contato.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  contato: Contato = new Contato();

  constructor(
    private contatoService: ContatoService,
    private router: Router
  ) { }

  editarForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    idade: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    profissao: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });

  ngOnInit(): void {
    this.contato = this.contatoService.getContatoEditar();
    this.carregaDados();
  }

  carregaDados() {
    var vm = this;

    vm.editarForm.controls['nome'].setValue(vm.contato.nome);
    vm.editarForm.controls['endereco'].setValue(vm.contato.endereco);
    vm.editarForm.controls['idade'].setValue(vm.contato.idade);
    vm.editarForm.controls['profissao'].setValue(vm.contato.profissao);  
    vm.editarForm.controls['email'].setValue(vm.contato.email);
  }

  atualizarContato() {
    var vm = this;
    if(!vm.editarForm.valid) {
      return;
    }
    var contato: Contato = new Contato();
    contato.id = vm.contato.id;
    contato.nome = vm.editarForm.value.nome;
    contato.endereco = vm.editarForm.value.endereco;
    contato.idade = vm.editarForm.value.idade;
    contato.profissao = vm.editarForm.value.profissao;
    contato.email = vm.editarForm.value.email;

    vm.contatoService.atualizar(contato);
    vm.router.navigate(['']);
  }

  voltar() {
    var vm = this;
    vm.router.navigate(['']);
  }

}
