import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";

@Injectable({
  providedIn: "root",
})
export class EnrollmentService {
  _url = "https://kfsz.pythonanywhere.com/api/users/user-data/";
  constructor(private _http: HttpClient) {}
  enroll(user: User) {
    return this._http.post<any>(this._url, user);
  }
}
