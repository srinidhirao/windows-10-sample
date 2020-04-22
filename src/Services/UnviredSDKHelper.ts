import { Injectable } from "@angular/core";
declare var window: any;

@Injectable()
export class UnviredSDKHelper {
    constructor() {

    }

    login(parameters: any): Promise<any> {
        // return new Promise( (resolve, reject) => {
        //     window.ump.login(parameters, function success(result) {
        //         resolve(result)
        //     }, function failure(error) {
        //         reject(error)
        //     });
        // })

        return new Promise( (resolve, reject) => {
            window.ump.login(parameters, resolve, reject);
        })
    }
}