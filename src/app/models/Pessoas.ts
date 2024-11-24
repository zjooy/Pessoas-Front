export interface PessoaListar{
    iD_Pessoa?:number;
    nome:string;
    email:string;
    cpf:string;
    senha:string;
    dT_Cadastro:Date;
    dT_Alteracao?:Date;
}