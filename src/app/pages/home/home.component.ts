import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../../services/pessoas.service';
import { PessoaListar } from '../../models/Pessoas';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  pessoas: PessoaListar[] = [];
  pessoasGeral: PessoaListar[] = [];

  constructor(private servicePessoa:PessoasService){}
  
  ngOnInit(): void {
    this.servicePessoa.GetPessoas().subscribe(response => {
      this.pessoas = response.dados;
      this.pessoasGeral = response.dados;
    })
  }

  buscar(event:Event){
    const target = event.target as HTMLInputElement;
    const valor = target.value.toLowerCase();

    this.pessoas = this.pessoasGeral.filter(pessoa => {
      return pessoa.nome.toLowerCase().includes(valor);
    })
  }

  
  deletar(id:number | undefined){
      this.servicePessoa.DeletePessoas(id).subscribe(response => {
        window.location.reload()
      })
  }

}
