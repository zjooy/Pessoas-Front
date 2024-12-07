import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { PessoaListar } from '../../models/Pessoas';
import { PessoasService } from '../../services/pessoas.service';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-cadastro',
  imports: [FormComponent, HeaderComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  btnTitulo = "Cadastrar usuários"
  btnAcao = "Cadastrar";

  constructor(private pessoaService: PessoasService, private router: Router){}

  criarPessoa(pessoa : PessoaListar){
    this.pessoaService.CriarPessoa(pessoa).subscribe(response => {
      this.router.navigate(['/'])
    })
  }

}
