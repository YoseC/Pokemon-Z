import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { PokemonState } from '../../store/pokemon.reducer';
import { PokemonGraphQLService } from '../../services/pokemon-graphql.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [MatButtonModule, MatCardModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {


}
