import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-diario-alimentar',
  templateUrl: 'diario-alimentar.html',
})
export class DiarioAlimentarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  /**
   * Abre a tela de adicionar refeição.
   *
   * @author Daniel Silva Marcelino
   */
  adicionarRefeicao(): void {
    this.navCtrl.push('AdicionarRefeicaoPage');
  }
}
