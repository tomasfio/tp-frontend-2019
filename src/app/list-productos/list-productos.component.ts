import { Component, OnInit } from '@angular/core';
import { ProductoService } from "../services/producto.service";

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {

  productos;

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getAll()
      .subscribe(
        res => this.productos = res['Productos'],
        err => console.log(err)
      );
  }

}
