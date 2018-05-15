import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AvesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AvesProvider {

  url: string = 'http://dev.contanimacion.com/birds/public';


  constructor(public http: HttpClient) {
  }

  getBirdsList(userId:any){
    return this.http.get(this.url + '/getBirds/' + userId);
  }

}