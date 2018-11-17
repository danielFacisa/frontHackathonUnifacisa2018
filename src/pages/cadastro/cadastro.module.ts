import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CadastroPage} from './cadastro';
import {Ionic2MaskDirectiveModule} from "../../util/Ionic2MaskDirective.module";

@NgModule({
  declarations: [
    CadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPage),
    Ionic2MaskDirectiveModule
  ],
  exports: [
    CadastroPage
  ]
})
export class CadastroPageModule {
}
