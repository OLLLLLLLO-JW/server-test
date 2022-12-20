import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent {
  totalAngularPackages = {};
 
  title = 'server-test';

  // constructor(private configComponent: ConfigComponent) {}
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    const headers = { 'Access-Control-Allow-Origin': '*' }
    this.http.get<any>('http://zzapp.zapto.org:3221/db/getAll', {headers}).subscribe(data => {
      this.totalAngularPackages = data;
    })  
      console.log(this.totalAngularPackages);    
  }
      
}