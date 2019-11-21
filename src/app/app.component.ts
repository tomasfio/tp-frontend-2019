import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  categoriaSeleccionada : string = "";

  changeCategoria($event){
    console.log($event);
    this.categoriaSeleccionada = $event;
  }
}
