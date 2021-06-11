import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApicallService } from '../../service/service/apicall.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {


  url: string = 'https://pokeapi.co/api/v2/pokemon/';
  pkm: any;
  typeName1:string;
  typeName2:String;

  @Input() id:number;


  callPkm(id:number){
    this._apicall.callApi(this.url+id.toString()).subscribe(data=>this.pkm=data);
    this._apicall.callApi(this.url+id.toString()).subscribe(data=>this.typeName1=data['types'][0].type.name);
    this._apicall.callApi(this.url+id.toString()).subscribe(data=>this.typeName2=data['types'][1].type.name);
    // console.log(this.pkm);
  }




  constructor(private _apicall:ApicallService) { }

   ngOnInit() {
    this.callPkm(this.id)
  }
}

// async function fondoElemento(pokemon) { //para definir el fondo de las tarjetas, considera si el pokemon posee dos elementos
//   let nombreTipo1 = await pokemon.types[0].type.name;
//   let fondoColorTipo = `background:${colors[nombreTipo1]}`;
//   let nombretipo2 = " ";
//   if (pokemon.types[1]) { // en caso de que posea 2 elementos
//       nombreTipo1 = await pokemon.types[1].type.name;
//       nombretipo2 = await pokemon.types[0].type.name;
//       fondoColorTipo = `background: linear-gradient(45deg, ${colors[nombreTipo1]} 50%, ${colors[nombretipo2]} 50%)`;
//   }
//   let arreglo = []
//   arreglo.push(fondoColorTipo); //fondo que ha de llevar
//   arreglo.push(nombreTipo1); //primer tipo
//   arreglo.push(nombretipo2); //segundo tipo
//   return arreglo; //para retornar las condiciones del fondo, y los tipos que tiene el pokemon en un arreglo.
// }