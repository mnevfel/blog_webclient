import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Providers } from "./index";


@Injectable()
export class HttpProvider {
  private apiUrl: String = "";
  constructor(private http: Http) {
    this.apiUrl = Providers.Location.API;
  }

  get(url: string, alert: boolean = true) {
    return this.http.get(this.apiUrl + url, this.jwt()).map((response: Response) => response.json()).catch(response => this.handleError(response, alert));
  }

  post(url: string, data: any, alert: boolean = true) {
    return this.http.post(this.apiUrl + url, data, this.jwt()).map((response: Response) => response.json()).catch(response => this.handleError(response, alert));
  }

  put(url: string, data: any, alert: boolean = true) {
    return this.http.put(this.apiUrl + url, data, this.jwt()).map((response: Response) => response.json()).catch(response => this.handleError(response, alert));
  }

  delete(url: string, alert: boolean = true) {
    return this.http.delete(this.apiUrl + url, this.jwt()).map((response: Response) => response.json()).catch(response => this.handleError(response, alert));
  }

  private jwt() {
    let headers = new Headers({ 'Authorization': Providers.Location.Jwt() });
    return new RequestOptions({ headers: headers });
  }

  private handleError(error: Response | any, alert: boolean) {
    let errMsg: string;
    Providers.Helper.SetLoading(false);
    if (error instanceof Response) {
      try {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        if (body.Notification && alert)
          Providers.Notify.Push(body.Notification);
      } catch (e) {
        errMsg = "";
      }
    }
    //Burada istenirse log tutulabilir. 
    return Observable.throw(error);
  }
}
