import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { FotoServicoProvider } from '../../../../providers/foto-servico/foto-servico'

@IonicPage()
@Component({
  selector: 'page-rotas-abastecimento',
  templateUrl: 'rotas-abastecimento.html',
})
export class RotasAbastecimentoPage {
  @ViewChild(Slides) slides: Slides;

  public contador: number = 1;
  cameraButton: boolean;
  fotoBomba1: string;
  fotoBomba2: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    public foto: FotoServicoProvider
  ) {} 


   
  toBack() {
    this.contador -= 1;
    this.slides.slidePrev(400)
    if (this.contador == 0) {
      this.navCtrl.pop();
      
    }

    if(this.contador == 3 || this.contador == 4){
      this.cameraButton = true;
    }else{
      this.cameraButton = false;
    }
  }

  toGo() {
    this.slides.slideTo(this.contador, 400)
    this.contador += 1;
    if (this.contador == 5) {

      let toast = this.toastCtrl.create({
        message: 'Abastecimento adicionada com sucesso',
        duration: 2000
      });
      toast.present();
      this.navCtrl.pop();
    }

    if(this.contador == 3 || this.contador == 4){
      this.cameraButton = true;
    }else{
      this.cameraButton = false;
    }
  }

  mostrar(){
    
  this.foto.getFoto('picture')
     
      .then(responses => {
        if (this.contador == 3 ){
          this.fotoBomba1 = this.foto.ultimaFoto;
            console.log(this.fotoBomba1);
          }
        if (this.contador == 4){
          this.fotoBomba2 = this.foto.ultimaFoto;
            console.log("bomba 2");
      }
    })
    
  }
}
