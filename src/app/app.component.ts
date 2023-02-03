import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  // TODO: Add code here to call https://api.spacexdata.com/v2/launches when the component is initialized

}
