import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaPokemonComponent } from './pages/lista-pokemon/lista-pokemon.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, // Página de inicio
  { path: 'lista-pokemon', component: ListaPokemonComponent } // Vista de la lista de Pokémon
];