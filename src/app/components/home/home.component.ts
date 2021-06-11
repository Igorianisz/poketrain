import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApicallService } from 'src/app/service/service/apicall.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  pathsList : any[] = this._apiCall.pathsList;
  // [
  // {'name': 'Pokemon', 'value':'/pokemon'},
  // {'name': 'Items', 'value':'/items'},
  // {'name': 'x', 'value':'/x'},
  // ]

  constructor(
    private _router: Router,
    private _apiCall: ApicallService
  ) { }

  ngOnInit(): void {
  }

  // async redirectTo (path: string) {
  //   console.log("Ruta :", path);
  //   await this._router.navigateByUrl(path);
  // }

}
