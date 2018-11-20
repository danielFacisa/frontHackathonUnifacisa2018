import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FoodProvider} from "../../providers/food/food";
import {Observable} from "rxjs/Rx";

@IonicPage()
@Component({
  selector: 'page-adicionar-refeicao',
  templateUrl: 'adicionar-refeicao.html',
})
export class AdicionarRefeicaoPage {

  listAllFood = [];
  listAdd = [];
  quantidade = null;
  idFood = null;
  totalCalorias = 0;
  totalCarboidratos = 0;
  totalProteinas = 0;
  totalLipidios = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private foodProvider: FoodProvider,
              private alertController: AlertController) {
    this.listarFood();
  }

  ionViewDidLoad() {
  }

  /**
   * Lista todos os alimentos.
   *
   * @author Daniel Silva Marcelino
   */
  listarFood(): void {
    this.foodProvider.getListAllFood().then(
      s => {
        this.listAllFood = s;
      },
      e => {
        const alerta = this.alertController.create();
        alerta.setMessage("Erro: " + JSON.stringify(e));
        alerta.addButton("OK");
        alerta.present();
      }
    )
  }

  /**
   * Adiciona um item selecionado a lista e realiza a soma de propriedades específicas solicitadas.
   *
   * @author Daniel Silva Marcelino
   */
  adicionar(): void {
    let listAux = [];
    for (let i = 0; i < this.listAllFood.length; i++) {
      if (Number.parseInt(this.listAllFood[i].id) === Number.parseInt(this.idFood)) {
        if (this.listAdd.length === 0) {
          if (this.quantidade === null) {
            this.quantidade = 1;
            this.listAdd[0] = {
              quantidade: this.quantidade,
              food: this.listAllFood[i]
            };
          } else {
            this.listAdd[0] = {
              quantidade: this.quantidade,
              food: this.listAllFood[i]
            };
          }
        } else {
          if (this.quantidade === null) {
            this.quantidade = 1;
            listAux[0] = {
              quantidade: this.quantidade,
              food: this.listAllFood[i]
            };
            for (let i = 0; i < this.listAdd.length; i++) {
              listAux[i + 1] = this.listAdd[i];
            }
          } else {
            listAux[0] = {
              quantidade: this.quantidade,
              food: this.listAllFood[i]
            };
            for (let i = 0; i < this.listAdd.length; i++) {
              listAux[i + 1] = this.listAdd[i];
            }
          }
          this.listAdd = JSON.parse(JSON.stringify(listAux));
        }
        this.totalCalorias += (this.quantidade * Math.trunc(this.listAllFood[i].attributes.energy.kcal));
        this.totalCarboidratos += (this.quantidade * Math.trunc(this.listAllFood[i].attributes.carbohydrate.qty));
        this.totalProteinas += (this.quantidade * Math.trunc(this.listAllFood[i].attributes.protein.qty));
        this.totalLipidios += (this.quantidade * Math.trunc(this.listAllFood[i].attributes.lipid.qty));
        break;
      }
    }
    this.limparCampos();
  }

  /**
   *
   * @param index
   *      Posição do objeto no array.
   *
   * @param data
   *      Objeto com todos os dados do item selecionado.
   *
   * @author Daniel Silva Marcelino
   */
  removerObjeto(index, data): void {
    this.totalCalorias -= (data.quantidade * Math.trunc(data.food.attributes.energy.kcal));
    this.totalCarboidratos -= (data.quantidade * Math.trunc(data.food.attributes.carbohydrate.qty));
    this.totalProteinas -= (data.quantidade * Math.trunc(data.food.attributes.protein.qty));
    this.totalLipidios -= (data.quantidade * Math.trunc(data.food.attributes.lipid.qty));
    this.listAdd.splice(index, 1);
  }

  /**
   * Limpa os campos de seleção e quantidade.
   *
   * @author Daniel Silva Marcelino
   */
  limparCampos(): void {
    Observable.timer(500).subscribe(
      () => {
        this.quantidade = null;
        this.idFood = null;
      }
    );
  }

}
