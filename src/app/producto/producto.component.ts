import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categoriaSeleccionada : string = "";

  changeCategoria($event){
    console.log($event);
    this.categoriaSeleccionada = $event;
  }

}
