import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditarComponent } from './contato/editar/editar.component';
import { HomeComponent } from './contato/home/home.component';
import { IncluirComponent } from './contato/incluir/incluir.component';
import { ListarComponent } from './contato/listar/listar.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'editar', component: EditarComponent, pathMatch: 'full'},
    { path: 'incluir', component: IncluirComponent, pathMatch: 'full'}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
