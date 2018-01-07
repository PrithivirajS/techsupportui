import {Injectable} from "@angular/core";
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

@Injectable()
export class HTTPService{

  constructor (private _http: Http)  {}

  getCurrentTime() {
    var json =  JSON.stringify({username:"nodeUser",password:"test",client_id:"odin",grant_type:"password"});
    var params = 'json=' +json;
    var headers = new Headers();
      headers.append('Content-Type','application/x-www-form-urlencoded');
      headers.append("Access-Control-Allow-Origin", "*");
      headers.append("Access-Control-Allow-Methods","GET,POST,OPTIONS");
  //    headers.append("Access-Control-Allow-Headers":'X-HTTP-Method-Override', 'Content-Type', 'x-requested-with');

    // let options = new RequestOptions({ headers: headers });

     return this._http.post('https://shield.nnnow.com/auth/realms/AILSECURE/protocol/openid-connect/token', params, {
       headers: headers
     }).map(res=> {
                res.json();
                console.log("res",res);
              });
  }


}
