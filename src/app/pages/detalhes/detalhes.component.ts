import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PessoasService } from '../../services/pessoas.service';
import { response } from 'express';
import { PessoaListar } from '../../models/Pessoas';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-detalhes',
  imports: [RouterModule, HeaderComponent],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{

  pessoa!: PessoaListar;

  constructor(private pessoaService: PessoasService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.pessoaService.GetPessoaId(id).subscribe(response => {
      this.pessoa = response.dados;
    })
  }

}
