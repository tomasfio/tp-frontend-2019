import { Component, OnInit, Input } from '@angular/core';
import { ProductoService } from "../services/producto.service";

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {

  listProductos;
  productos;
  private _categoria = '';
  @Input() set categoria(categoria : string) {
    this._categoria = categoria;
    this.changeCategoria();
  }

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getAll()
      .subscribe(
        res => this.listProductos = this.productos = res['Productos'],
        err => console.log(err)
      );
  }

  changeCategoria(){
    if(this._categoria == ""){
      this.productos = this.listProductos;
    }
    else{
      this.productos = this.listProductos.filter(
        producto => producto.categoria._id === this._categoria
      );
    }
  }

}
