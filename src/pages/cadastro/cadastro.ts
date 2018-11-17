import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PessoaModel} from "../../model/PessoaModel";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorsForm} from "../../util/validatorsForm";

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  pessoaModel: PessoaModel;
  formGroup: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.pessoaModel = new PessoaModel();
    this.validacaoFormulario();
  }

  ionViewDidLoad() {
  }

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

  cadastrar(): void {
    if (this.formGroup.valid) {

    }
  }
}
