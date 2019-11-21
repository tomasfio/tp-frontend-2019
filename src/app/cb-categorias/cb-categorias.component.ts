import { Component, OnInit } from '@angular/core';
import { CategoriaService } from "../services/categoria.service";

@Component({
  selector: 'app-cb-categorias',
  templateUrl: './cb-categorias.component.html',
  styleUrls: ['./cb-categorias.component.css']
})
export class CbCategoriasComponent implements OnInit {

  categorias;
  
  constructor(private categoriaSevice: CategoriaService){

  }
  
  ngOnInit() {
    this.categoriaSevice.getAll()
      .subscribe(
        res => this.categorias = res['Categorias'],
        err => console.log(err)
      );

      
  }

}
