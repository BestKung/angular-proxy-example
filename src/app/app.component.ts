import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

// import * as Http from "http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example-ng';

  constructor(private http: HttpClient) {
    console.log("constructor");
    this.http.get<any>('api/get-welcome').subscribe(data => {
      console.log(data);
    });

  }
}
