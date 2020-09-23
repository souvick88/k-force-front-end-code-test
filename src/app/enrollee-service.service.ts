import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EnrolleeServiceService {
  private _enrolleeUrl = "http://localhost:8080/enrollees";

  names: [];
  constructor(private http: HttpClient) {}

  getEnrollments() {
    return this.http.get<any>(this._enrolleeUrl);
  }
}
