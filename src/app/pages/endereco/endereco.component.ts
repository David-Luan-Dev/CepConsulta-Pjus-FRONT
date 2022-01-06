import { Component, OnInit } from '@angular/core';
import { CepServiceService } from '../../Services/cep-service.service';
import { Endereco } from '../../domain/endereco';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
formControlCep = new FormControl();

  endereco: Endereco | undefined;
  cep: string = ''

  constructor(private enderecoService: CepServiceService) { }

  ngOnInit() {
  }

  getCep() {
    if (this.cep === '') {
      alert('Digite um CEP válido');
    } else {
      this.enderecoService.buscar(this.cep)
        .subscribe(response => {
          localStorage.setItem("Endereço", JSON.stringify(response));
          this.endereco = response;
      });
    }
  }

}
