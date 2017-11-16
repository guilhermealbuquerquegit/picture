import { Camera, CameraOptions } from '@ionic-native/camera'
import {Injectable} from '@angular/core'

@Injectable()

export class FotoServico {

    exibirImagem: boolean;
    ultimaFoto: string;
   
    constructor(public camera: Camera){}

     getFoto(type)  {

        return new Promise((resolve, reject) => {

            const options: CameraOptions = {
                    quality: 100,
                    destinationType: this.camera.DestinationType.DATA_URL,
                    encodingType: this.camera.EncodingType.JPEG,
                    mediaType: this.camera.MediaType.PICTURE,
                    sourceType: type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                    correctOrientation: true
                };
                
                this.exibirImagem = true;
                console.log("O metodo foi acionado")
        
                this.camera.getPicture(options).then((imageData) => {
        
                    this.ultimaFoto = 'data:image/jpeg;base64,' + imageData;

                    resolve(this.ultimaFoto);

                }, (err) => {
                    // Handle error
                    reject('Erro na última foto')
                });

        });

       
    }

}