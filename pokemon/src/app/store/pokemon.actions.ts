import { createAction, props } from '@ngrx/store';

export const loadPokemons = createAction('[Pokemon] Load Pokemons');
export const loadPokemonsSuccess = createAction(
  '[Pokemon] Load Pokemons Success',
  props<{ pokemons: any[] }>()
);
export const loadPokemonsFailure = createAction(
  '[Pokemon] Load Pokemons Failure',
  props<{ error: string }>()
);
