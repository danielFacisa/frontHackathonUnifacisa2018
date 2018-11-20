import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {PessoaModel} from "../../model/PessoaModel";

/*
  Generated class for the PessoaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PessoaProvider {
  constructor(public http: HttpClient) {
  }

  postCadastroPessoa(pessoalModel: PessoaModel): Promise<any> {

    const parametros = {
      nome: pessoalModel.nomePessoa,
      telefone: pessoalModel.telefonePessoa,
      email: pessoalModel.emailPessoa,
      senha: pessoalModel.senhaPessoa,
      idade: pessoalModel.idadePessoa,
      altura: pessoalModel.alturaPessoa,
      peso: pessoalModel.pesoPessoa,
    };

    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/pessoa', parametros).subscribe(
        s => {
          resolve(s);
        },
        e => {
          reject(e);
        }
      )

    })
  }

}

//
