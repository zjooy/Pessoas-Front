import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PessoaListar } from '../../models/Pessoas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
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
        iD_Pessoa: new FormControl(this.dadosPessoa?.iD_Pessoa || 0),
        nome: new FormControl(this.dadosPessoa?.nome || '', Validators.required),
        email: new FormControl(this.dadosPessoa?.email || '', [Validators.required, Validators.email]),
        cpf: new FormControl(this.dadosPessoa?.cpf || '', Validators.required),
        senha: new FormControl(this.dadosPessoa?.senha || '', Validators.required),
        dT_Cadastro: new FormControl(Date.now),
        dT_Alteracao: new FormControl(null),
    });
  }

  submit(){
    if (this.pessoaForm.valid) {
      this.onSubmit.emit(this.pessoaForm.value);
    } else {
      this.pessoaForm.markAllAsTouched();
    }
  }

}
