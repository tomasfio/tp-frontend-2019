import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private URI : string;

  constructor(private httpClient: HttpClient) { 
    this.URI = 'http://localhost:3000/categoria/';
  }

  getAll(){
    return this.httpClient.get(this.URI);
  }
}
