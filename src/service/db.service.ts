import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class rasPiConnect {
    totalAngularPackages = {};
 
    constructor(private http: HttpClient) { }
    
    get() {
        console.log("Called the Get");
      const headers = { 'Access-Control-Allow-Origin': '*' }
      this.http.get<any>('http://zzapp.zapto.org:3221/db/getAll', {headers}).subscribe(data => {
        this.totalAngularPackages = data;
      })  
        console.log(this.totalAngularPackages);    
    }

    tempList = [
        {
            id: 1,
            name: 'Firebug',
            medium: 'serires'
        }
    ]
    // get() {
    //     console.log(this.tempList);
    //     console.log("ran the Get");
    //     return this.tempList;
       
    // }
    
    // add(addItem) {
    //     this.tempList.push(this.tempList);
    // }

}