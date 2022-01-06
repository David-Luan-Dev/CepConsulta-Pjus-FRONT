import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  { Endereco} from '../domain/endereco';


@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  constructor(private httpCliente: HttpClient) {}


  buscar(cep:String): Observable<Endereco> {
    return this.httpCliente.get<Endereco>('https://localhost:5001/ConsultaCep?txCep='+ cep);
  }
}
