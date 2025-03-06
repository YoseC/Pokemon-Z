import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { PokemonState } from '../../store/pokemon.reducer';
import { PokemonGraphQLService } from '../../services/pokemon-graphql.service';

@Component({
  selector: 'app-inicio',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {
  constructor(private pokemonGraphQLService: PokemonGraphQLService) {}

  ngOnInit() {
    this.pokemonGraphQLService.getPokemonList(5).subscribe(pokemons => {
      console.log('Pokémon obtenidos desde GraphQL:', pokemons);
    });
  }
}
