import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {PessoaModel} from "../../model/PessoaModel";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorsForm} from "../../util/ValidatorsForm";
import {PessoaProvider} from "../../providers/pessoa/pessoa";

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  pessoaModel: PessoaModel;
  formGroup: FormGroup;
  carregando: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
              private pessoaProvider: PessoaProvider, private loadingController: LoadingController, private alertController: AlertController) {
    this.pessoaModel = new PessoaModel();
    this.validacaoFormulario();
  }

  ionViewDidLoad() {
  }

  /**
   * Valida o formulário.
   *
   * @author Daniel Silva Marcelino
   */
  validacaoFormulario(): void {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, ValidatorsForm.nomeCompleto, Validators.maxLength(255)])],
      telefone: ['', Validators.compose([Validators.required, ValidatorsForm.telefone])],
      email: ['', Validators.compose([Validators.required, ValidatorsForm.email])],
      senha: ['', Validators.compose([Validators.required])],
      idade: ['', Validators.compose([Validators.required])],
      altura: ['', Validators.compose([Validators.required])],
      peso: ['', Validators.compose([Validators.required])]
    })
  }

  /**
   * Faz a chamada da requisição de cadastro de um novo usuário.
   *
   * @author Daniel Silva Marcelino
   */
  cadastrar(): void {
    if (this.formGroup.valid) {
      this.loading("Aguarde...");
      this.pessoaProvider.postCadastroPessoa(this.pessoaModel).then(
        sucesso => {
          this.limparCampos();
          this.carregando.dismiss();
          this.navCtrl.popAll();
        },
        erro => {
          this.carregando.dismiss();
          const alerta = this.alertController.create();
          alerta.setMessage(JSON.stringify(erro));// Implementação de teste.
          alerta.addButton("OK");
          alerta.present();
          this.carregando.dismiss();

        }
      )
    }
  }

  /**
   * Mostrar um loading com uma mensagem.
   *
   * @param messagem
   *        Mensagem a ser apresentada.
   *
   * @author Daniel Silva Marcelino
   */
  loading(messagem): void {
    this.carregando = this.loadingController.create();
    this.carregando.setContent(messagem);
    this.carregando.present();
  }

  /**
   * Limpa todos os campos do formulário de cadastro.
   *
   * @author Daniel Silva Marcelino
   */
  limparCampos(): void {
    this.pessoaModel.nomePessoa = null;
    this.pessoaModel.emailPessoa = null;
    this.pessoaModel.pesoPessoa = null;
    this.pessoaModel.alturaPessoa = null;
    this.pessoaModel.telefonePessoa = null;
    this.pessoaModel.idadePessoa = null;
    this.pessoaModel.senhaPessoa = null;
  }
}
