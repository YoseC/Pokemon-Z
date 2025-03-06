import { createReducer, on } from '@ngrx/store';
import * as PokemonActions from './pokemon.actions';

export interface PokemonState {
  pokemons: any[];
  loading: boolean;
  error: string | null;
}

export const initialState: PokemonState = {
  pokemons: [],
  loading: false,
  error: null,
};

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.loadPokemons, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(PokemonActions.loadPokemonsSuccess, (state, { pokemons }) => ({
    ...state,
    loading: false,
    pokemons,
  })),
  on(PokemonActions.loadPokemonsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
