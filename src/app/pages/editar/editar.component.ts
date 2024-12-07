import { Component, OnInit } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { PessoasService } from '../../services/pessoas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaListar } from '../../models/Pessoas';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-editar',
  imports: [FormComponent, CommonModule, HeaderComponent],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{

  btnTitulo = "Editar usuários"
  btnAcao = "Editar"
  pessoa!: PessoaListar;

  constructor(private pessoaService:PessoasService, private router: Router, private route:ActivatedRoute){}
  
  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.pessoaService.GetPessoaId(id).subscribe(response => {
        this.pessoa = response.dados;
    });
  }

  editarPessoa(pessoa: PessoaListar){
    this.pessoaService.PutPessoa(pessoa).subscribe(response => {
        this.router.navigate(['/']);
    })
  }
  
}
