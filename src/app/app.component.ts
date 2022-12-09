import { Component } from "@angular/core";
import { Config, ConfigService } from "./config/config.service";
import { HttpService } from "./http.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {
  title = 'server-test';
  constructor(private service: HttpService) {}
}
