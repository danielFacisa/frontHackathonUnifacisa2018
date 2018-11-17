import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DiarioAlimentarPage} from './diario-alimentar';

@NgModule({
  declarations: [
    DiarioAlimentarPage,
  ],
  imports: [
    IonicPageModule.forChild(DiarioAlimentarPage),
  ],
  exports: [
    DiarioAlimentarPage
  ]
})
export class DiarioAlimentarPageModule {
}
