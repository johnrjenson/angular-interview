import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  names$?: Observable<string[]>;
  names?: string[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // good
    this.names$ = this.http
      .get("https://api.spacexdata.com/v2/launches")
      // @ts-ignore
      .pipe(map((results: any[]) => results.map((r) => r.mission_name)));

      //Don't need this we are using async pipe
    //this.names$.subscribe();

    // bad
/*
    this.http
      .get("https://api.spacexdata.com/v2/launches")
      // @ts-ignore
      .subscribe((results: any[]) => {
        this.names = results.map((r) => r.mission_name);
      });
*/
  }
}
