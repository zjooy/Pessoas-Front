import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PessoaListar } from '../../models/Pessoas';

@Component({
  selector: 'app-form',
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  
  @Input() btnTitulo!: string;
  @Input() btnAcao!: string;
  @Input() dadosPessoa: PessoaListar | null = null;
  @Output() onSubmit = new EventEmitter<PessoaListar>();

  pessoaForm!:FormGroup;

  ngOnInit(): void {
    this.pessoaForm = new FormGroup({
        iD_Pessoa: new FormControl(this.dadosPessoa ? this.dadosPessoa.iD_Pessoa : 0),
        nome: new FormControl(this.dadosPessoa ? this.dadosPessoa.nome :''),
        email: new FormControl(this.dadosPessoa ? this.dadosPessoa.email :''),
        cpf: new FormControl(this.dadosPessoa ? this.dadosPessoa.cpf : ''),
        senha: new FormControl(this.dadosPessoa ? this.dadosPessoa.senha : ''),
        dT_Cadastro: new FormControl(Date.now),
        dT_Alteracao: new FormControl(null),
    });
  }

  submit(){
    this.onSubmit.emit(this.pessoaForm.value);
  }

}
