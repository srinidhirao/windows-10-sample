
Summary
-

Update: 22 Apr 2020

Using the Unvired Cordova SDK with the help of a Typescript helper(UnviredSDKHelper.ts):
If we use a typescript helper wrapper, then we can offer a consistent interface for calling apis in Cordova layer.

currently, when you test the Unvired SDK login api, it fails with an error message saying specify metadata.json. 

If we do specify the file, then it fails to parse due to missing NewtonSoftJSON library. This needs to be figured out.

This project demonstrates the issue of building a Windows 10 Universal app with Ionic 5. The commonly used Camera Plugin fails with an error saying 'Function Expected', possibly relating to the syntax in which the plugin is modeled.

Windows 10 support is added by way of updating config.xml file as mentioned here:
https://cordova.apache.org/docs/en/5.1.1/guide/platforms/win8/win10-support.html

Requirements
-
1. Windows 10 machine running Visual Studio 2015 Community Edition

Ionic Info
-
```
$ ionic info

Ionic:

   Ionic CLI          : 5.4.16 (C:\Users\srinidhi\AppData\Roaming\npm\node_modules\ionic)
   Ionic Framework    : ionic-angular 3.9.9
   @ionic/app-scripts : 3.2.4

Cordova:

   Cordova CLI       : 9.0.0 (cordova-lib@9.0.1)
   Cordova Platforms : windows 7.0.1
   Cordova Plugins   : cordova-plugin-ionic-keyboard 2.2.0, cordova-plugin-ionic-webview 4.1.3, (and 6 other plugins)

Utility:

   cordova-res : not installed
   native-run  : not installed

System:

   NodeJS : v8.17.0 (C:\Program Files\nodejs\node.exe)
   npm    : 6.13.4
   OS     : Windows 10
```

Setup
-
```
$ npm install
$ ionic cordova platform add windows
```

Build
-
1. Prepare the project.
```
$ ionic cordova prepare windows
```

2. Open the file platforms/windows/CordovaApp.vs2013 in Visual Studio
3. In the solution explorer, set the project CordovaApp.Windows10 (Universal Windows) as the startup project.
4. Run the app on the Local Machine.
5. Once the app loads, click on the button, 'Test Camera Plugin (Ionic Native)'. Visual Studio's JS console, will report an error, Function Expected.
6. Click on 'Test Camera Plugin (Without Ionic Native)'. Native Camera opens up.