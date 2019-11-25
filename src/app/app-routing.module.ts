import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoComponent } from './producto/producto.component';
import { ProductoDetailComponent } from "./producto/producto-detail/producto-detail.component";;

const routes: Routes = [
  {path : '', component: ProductoComponent },
  {path: 'producto', redirectTo:'', pathMatch: 'full'},
  {path :'producto/:id', component: ProductoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
