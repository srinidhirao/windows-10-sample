import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UnviredSDKHelper } from '../../Services/UnviredSDKHelper';
declare var navigator: any;
declare var window: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertController: AlertController, public navCtrl: NavController, private unviredSDK: UnviredSDKHelper, private camera: Camera) {

  }

  onCameraButtonWithoutIonicNativeClick() {
    console.log('Camera Button Clicked');
    navigator.camera.getPicture(function onSuccess(success) {
      console.log("Successfully clicked the picture:" + success);
    }, function onError(error) {
      console.log("Error Capturing the picture: " + error);
    }, {})
  }

  async onCameraButtonWithIonicNativeClick() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log("Base 64: " + base64Image);
    }, (err) => {
      // Handle error
      console.log("Error: " + err)
    });
  }

  async presentAlert(title, message) {
    const alert = await this.alertController.create({
      title: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async onUnviredSDKButtonClick() {
    // Setting metadata.json fails with the error NewtonSoftJSON library is missing.
    // var parameters = {"appName": "DIGITAL_FORMS", 'metadataPath': './assets/js/metadata.json'};

    // Without Metadata.json
    var parameters = { "appName": "DIGITAL_FORMS" };
    try {
      let loginResult = await this.unviredSDK.login(parameters)
      this.presentAlert("SUCCESS", JSON.stringify(loginResult));
    }
    catch (error) {
      this.presentAlert("ERROR", JSON.stringify(error))
    }
  }
}
