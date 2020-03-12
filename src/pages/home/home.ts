import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UnviredCordovaSDK, LoginParameters, LoginResult } from '@ionic-native/unvired-cordova-sdk/ngx'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private camera: Camera, private unviredSDK: UnviredCordovaSDK) {

  }

  OnPrimaryButtonClick() {
    console.log('Camera Button Clicked');

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

  async OnSecondaryButtonClick() {
    console.log('Secondary Button Clicked');
    // This is usually done in app.component.ts of your app.
    // Before you can interact with UMP, you need to initialize the SDK and authenticate with UMP.
    // SDK Initialization
    let loginParameters = new LoginParameters()
    loginParameters.appName = 'UNVIRED_DIGITAL_FORMS'
    loginParameters.metadataPath = '../assets/metadata.json'
    let loginResult: LoginResult
    try {
      loginResult = await this.unviredSDK.login(loginParameters)
    }
    catch (error) {
      this.unviredSDK.logError("AppComponent", "Initialize", "Error during login: " + error)
    }

  }

}
