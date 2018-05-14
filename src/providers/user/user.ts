import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  url: string = 'http://dev.contanimacion.com/birds/public';

  constructor(public http: HttpClient) {
  }


  login(accountInfo: any) {
    let seq = this.http.post(this.url + '/login/', accountInfo);

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        //this._loggedIn(res);
      } else {

      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
}
