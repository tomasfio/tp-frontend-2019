import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductoService } from "../../services/producto.service";

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {
  producto;

  constructor(private productoService: ProductoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productoService.getOne(params['id']).subscribe(
        res => this.producto = res,
        err => console.log(err)
      );
    });
  }

}
