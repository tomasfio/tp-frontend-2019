import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CbCategoriasComponent } from './cb-categorias/cb-categorias.component';
import { ListProductosComponent } from './producto/list-productos/list-productos.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoDetailComponent } from './producto/producto-detail/producto-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CbCategoriasComponent,
    ListProductosComponent,
    ProductoComponent,
    ProductoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
