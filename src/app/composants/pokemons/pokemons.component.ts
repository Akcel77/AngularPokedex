import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons';
import { FormRecherchePokemon } from '../../modeles/form-recherche-pokemon';

@Component({
 selector: 'app-pokemons',
 templateUrl: './pokemons.component.html',
 styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

 pokemons = [];
 compte = 0;
 faOptinMonster = faOptinMonster;
 formRecherchePokemon = new FormRecherchePokemon('');

 constructor(private servicePokemons: PokemonsService) { }

 ngOnInit() {
   this.pokemons = this.servicePokemons.getPokemons();
   this.compte = this.servicePokemons.comptagePokemons();
 }

 rechercher(nomDuPokemon) {
   this.pokemons = this.servicePokemons.rechercherPokemon(nomDuPokemon);
 }

 annulerRecherche() {
   this.pokemons = this.servicePokemons.getPokemons();
   this.formRecherchePokemon.setNom('');
 }

}
