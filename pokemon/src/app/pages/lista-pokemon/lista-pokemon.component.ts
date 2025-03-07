import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PokemonGraphQLService } from '../../services/pokemon-graphql.service';
import { RouterModule } from '@angular/router';
import { Pokemon } from '../../models/pokemon.model';
@Component({
  selector: 'app-lista-pokemon',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.scss']
})
export class ListaPokemonComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource: Pokemon[] = [];

  constructor(private pokemonGraphQLService: PokemonGraphQLService) {}

  ngOnInit() {
    this.pokemonGraphQLService.getPokemonList(100).subscribe(response => {
      console.log('Respuesta de GraphQL:', response); // Para ver qué devuelve la API
      this.dataSource = response.pokemon_v2_pokemon; // 👈 Extraer correctamente el array
    });
  }
  
}  