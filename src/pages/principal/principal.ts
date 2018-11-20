import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  /**
   * Abre a tela de Diário Alimentar.
   *
   * @author Daniel Silva Marcelino
   */
  diarioAlimentar(): void {
    this.navCtrl.push('DiarioAlimentarPage');
  }

  /**
   * Abre a tela de resumo.
   *
   * @author Daniel Silva Marcelino
   */
  resumo(): void {
    this.navCtrl.push('ResumoPage');
  }

}
