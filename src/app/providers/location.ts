import { Providers } from "./index";
import { Headers, Http, RequestOptions, Response } from "@angular/http";


export class LocationProvider {
  public API: String = "";
  constructor() {
    let isDevMode = window.location.href.includes("localhost");
    if (isDevMode) {
      this.API = "http://localhost:9000/api/";
    } else {
      this.API = "/api/";
    }
  }

  public Jwt() {
    let currentUser = Providers.Storage.Get("x_0");
    if (currentUser) {
      return 'Nevfel=' + currentUser;
    }
  }
}
