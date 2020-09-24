import { Component, OnInit } from "@angular/core";
import { EnrolleeServiceService } from "../enrollee-service.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-enrollee",
  templateUrl: "./enrollee.component.html",
  styleUrls: ["./enrollee.component.css"],
})
export class EnrolleeComponent implements OnInit {
  isDisplay = true;
  isActive = false;
  isInactive = false;

  state = "normal";
  type: string;
  id: string;
  names: [];
  newProp;
  newName: string;
  active;
  updateData = {};
  pickDisplay = "isDisplay";

  //fix for displaying edit options only upon click on particular user
  flag: boolean = false;
  index: number = 0;
  toggle(i): void {
    if (this.index == i && this.flag) {
      this.index = null;
    } else {
      this.flag = true;
      this.index = i;
    }
  }

  onDisplayActive() {
    this.pickDisplay = "isActive";
  }
  onDisplayInactive() {
    this.pickDisplay = "isInactive";
  }
  onDisplayAll() {
    this.pickDisplay = "isDisplay";
  }

  onRead(id) {
    this.updateData = {
      "name": this.newName,
      "active": (this.active === "true") ? true : false,
    };
    console.log(id);
    console.log(this.updateData);
  }
  putGet() {
    this._enrollService.getEnrollments()
      .subscribe((res) => {
        this.names = res;
        // var newName = JSON.stringify(res);
        // console.log(newName);
      }, (err) => console.log(err));
  }
  onUpdate(id) {
    let endPoints = id;
    this.http.put<any>(
      "http://localhost:8080/enrollees/" + endPoints,
      this.updateData = {
        "name": this.newName,
        "active": (this.active === "true") ? true : false,
      },
    )
      .subscribe((res) => {
        console.log(res);
        this.putGet();
      });
  }

  constructor(
    private _enrollService: EnrolleeServiceService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this._enrollService.getEnrollments()
      .subscribe((res) => {
        this.names = res;
      }, (err) => console.log(err));
  }
}
