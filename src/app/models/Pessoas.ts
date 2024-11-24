export interface PessoaListar{
    iD_Pessoa?:number;
    nome:string;
    email:string;
    cpf:string;
    dT_Aniversario:Date;
    dT_Cadastro:Date;
    dT_Alteracao?:Date;
}