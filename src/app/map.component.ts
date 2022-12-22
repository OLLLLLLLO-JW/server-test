import { Component, OnInit } from "@angular/core";
import { rasPiConnect } from "src/service/db.service";

@Component({
    selector: 'ufo-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
  })

  export class mapCompoenent implements OnInit {
    constructor( private rasPiConnect:rasPiConnect) {}

    ngOnInit(): void {
        
    }
    getItem(){
        this.rasPiConnect.get();
    }
  }