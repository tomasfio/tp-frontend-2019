import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CbCategoriasComponent } from './cb-categorias/cb-categorias.component';
import { ListProductosComponent } from './list-productos/list-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    CbCategoriasComponent,
    ListProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
