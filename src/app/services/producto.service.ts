import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private URI : string;

  constructor(private httpClient: HttpClient) { 
    this.URI = 'http://localhost:3000/producto/';
  }

  getAll(){
    return this.httpClient.get(this.URI);
  }

  getOne(id){
    return this.httpClient.get(this.URI + id);
  }
}
