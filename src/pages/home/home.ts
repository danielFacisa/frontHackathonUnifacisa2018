import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  /**
   * Abre a tela de Login.
   *
   * @author Daniel Silva Marcelino
   */
  login(): void {
    this.navCtrl.push('LoginPage');
  }

  /**
   * Abre a tela de Cadastro.
   *
   * @author Daniel Silva Marcelino
   */
  cadastro(): void {
    this.navCtrl.push('CadastroPage');
  }

}
