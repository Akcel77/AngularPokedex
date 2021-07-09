import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Pokemon} from "../../types/pokemon";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon : Pokemon = new Pokemon();

  @Output() evenementClicImage = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  clicSurImage(nom) {
    this.evenementClicImage.emit(nom);
  }

}
