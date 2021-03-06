import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular'; 

@IonicPage()
@Component({
  selector: 'arla-pag-page',
  templateUrl: 'arla-pag.html',
})
export class ArlaPagPage {

  litros: number;
  litro: number;
  total: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController) {
  }
  preco(){
    return this.litros * this.litro;
  }
 
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Adicionado',
      subTitle: 'Arla32 Adicionado',
      buttons: ['OK']
    });
    alert.present();
  }
}
