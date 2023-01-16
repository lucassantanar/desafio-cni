import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { getDatabase, ref, set, get, child, remove, update } from '@firebase/database';
import { v4 as uuid } from 'uuid';
import { Contato } from 'src/app/model/contatoModel';


@Injectable({
  providedIn: 'root'
})

export class ContatoService {

  contatoEditar: Contato = new Contato();

  constructor(private db: Database) { }
  
  async incluir(contato: Contato) {
    const vm = this;
    const idAutoGerado = uuid();
    contato.id = idAutoGerado;
    set(ref(vm.db, 'listaContatos/' + contato.id), contato).then(() => {
      alert('Cadastro realizado com sucesso');
    }).catch((error) => {
      alert(error);
    })
  }
  
  async listar(){ 
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `listaContatos/`)).then((snapshot) => {
        if (snapshot.exists()) {
         return snapshot.val();
        } else {
          alert("Sem informações para listar!")
        }
      }).catch((error) => {
        alert(error);
      }); 
  }

  async atualizar(contato: Contato) {
    const vm = this;
    update(ref(vm.db, 'listaContatos/' + contato.id), contato).then(() => {
      alert('Cadastro atualizado com sucesso');
    }).catch((error) => {
      alert(error);
    })
  }

  async remover(id:string) {
    const dbRef = ref(getDatabase());
    remove(child(dbRef, `listaContatos/`+id));
  }

  getContatoEditar() {
    return this.contatoEditar;
  }

  setContatoEditar(contato: Contato) {
    return this.contatoEditar = contato;
  }
}
