import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ventana1Component } from './Componentes/ventana1/ventana1.component';
import { Ventana2Component } from './Componentes/ventana2/ventana2.component';


const routes: Routes = [
{path:'',  component:Ventana1Component},
{path:'web1',  component:Ventana1Component},
{path:'web2',  component:Ventana2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
