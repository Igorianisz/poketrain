import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/service/service/apicall.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {

  constructor(private _apicall:ApicallService
    ) {
    }

  loading: boolean = true;

  pathsList: any[] = this._apicall.pathsList
  // [
  //   { name: 'Pokemon', value: '/pokemon' },
  //   { name: 'Items', value: '/items' },
  //   { name: 'x', value: '/x' },
  // ];

  pokemonList: any[]=[];

  ngOnInit(): void {

    // this.pokemonArrayList=[...Array(this._apicall.POKEMON_TOTAL_NUMBER).keys()].map(x=>x+1);
    // console.log(this.pokemonArrayList);

    // this.pokemonArrayList.forEach(element => {
    //   let url=this.url+element.toString();
    //   this._apicall.callApi(element,url).subscribe((pkm:any)=>{
    //     this.pokemonArrayList[element]=pkm;
    //     console.log(pkm['id']);
    //   })
    // });

    console.log('Listo pa consultar Api');
    for (let i = 1; i < this._apicall.POKEMON_TOTAL_NUMBER; i++) {
      this.pokemonList.push(i);
      }
    
    this.loading = false;;
  }
}
