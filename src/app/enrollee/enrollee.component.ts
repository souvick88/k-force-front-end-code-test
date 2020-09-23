import { Component, OnInit } from "@angular/core";
import { EnrolleeServiceService } from "../enrollee-service.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-enrollee",
  templateUrl: "./enrollee.component.html",
  styleUrls: ["./enrollee.component.css"],
})
export class EnrolleeComponent implements OnInit {
  names: [];

  constructor() {}

  ngOnInit(): void {
    this._enrollService.getEnrollments()
      .subscribe((res) => {
        this.names = res;
      }, (err) => console.log(err));
  }
}
