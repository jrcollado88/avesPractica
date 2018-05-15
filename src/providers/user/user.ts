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
  userId:any;

  constructor(public http: HttpClient) {
  }


  login(accountInfo: any) {
    return this.http.post(this.url + '/login/', accountInfo);
    /*seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'OK') {

      } else {

      }
    }, err => {
      console.error('ERROR', err);
    });*/
  }

  setUserId(id:any){
    this.userId=id;
  }

  getUserId(){
    return this.userId;
  }


}
