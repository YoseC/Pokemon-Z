import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonGraphQLService {
  constructor(private apollo: Apollo) {}

  // Método para obtener la lista de Pokémon
  getPokemonList(limit: number = 10, offset: number = 0): Observable<any> {
    return this.apollo.watchQuery({
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
      map((result: any) => result.data.pokemon_v2_pokemon)
    );
  }
}
