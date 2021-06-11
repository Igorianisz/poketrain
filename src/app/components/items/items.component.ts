import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import { ApicallService } from 'src/app/service/service/apicall.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  loading: boolean = true;

  pathsList: any[] =this._apicall.pathsList;
  // [
  //   { name: 'Pokemon', value: '/pokemon' },
  //   { name: 'Items', value: '/items' },
  //   { name: 'x', value: '/x' },
  // ];

  url: string = 'https://pokeapi.co/api/v2/pokemon/';
  itemList: any[] = [];

  constructor(private _apicall:ApicallService) {}
  

  colorStatus:string;
  dni:string;
  dniStatus:boolean;
  dniList:string[]=[];
  dniListStatus:boolean[]=[];
statusLista:boolean = false;

  ngOnInit(): void {
    console.log('Listo pa consultar Api');
    for (let i = 1; i < 2; i++) {
      let url=this.url+i.toString();
      this._apicall.callApi(url).subscribe((item:any)=>{
        this.itemList.push(item);
        console.log(item['id']);
        console.log(item);
      })
    }
    this.loading = false;
  }

  checkDni(input){
    let a = input.target.value;
    this.dni=a;
      this.dniStatus = this._apicall.validarDni(a);
      this.dniStatus ? this.colorStatus='blue' :this.colorStatus= 'red'

  
  }

  crearDni(cantidad){
    let a = cantidad.target.value;
    for (let i = 0; i < a; i++) {
      let dni=this._apicall.dniGenerator()
      console.log(dni);
      this.dniList.push(dni);
      this.dniListStatus.push(this._apicall.validarDni(dni));

      
    }
    this.statusLista=true;
    console.log(this.dniList);
  }


  
}
