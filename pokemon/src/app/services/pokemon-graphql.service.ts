import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonGraphQLService {
  constructor(private apollo: Apollo) {}

  // Método para obtener la lista de Pokémon
  getPokemonList(limit: number = 10, offset: number = 0): Observable<{ pokemon_v2_pokemon: Pokemon[] }> {
    return this.apollo.watchQuery<{ pokemon_v2_pokemon: Pokemon[] }>({
      query: gql`
        query GetPokemonList($limit: Int, $offset: Int) {
          pokemon_v2_pokemon(limit: $limit, offset: $offset) {
            id
            name
          }
        }
      `,
      variables: {
        limit: limit,
        offset: offset
      }
    }).valueChanges.pipe(
      map(result => result.data) // 👈 Devolver directamente `data`
    );
  }
}
