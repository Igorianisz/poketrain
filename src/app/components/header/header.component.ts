

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()  paths: any[];


  constructor() {

   }

  ngOnInit(): void {
    console.log("paths -> ",this.paths);
  }

}
