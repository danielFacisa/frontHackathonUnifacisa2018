import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AdicionarRefeicaoPage} from './adicionar-refeicao';

@NgModule({
  declarations: [
    AdicionarRefeicaoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarRefeicaoPage),
  ],
  exports: [
    AdicionarRefeicaoPage
  ]
})
export class AdicionarRefeicaoPageModule {
}
