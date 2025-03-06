import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PokemonGraphQLService } from '../../services/pokemon-graphql.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-lista-pokemon',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.scss']
})
export class ListaPokemonComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource: any[] = [];

  constructor(private pokemonGraphQLService: PokemonGraphQLService) {}

  ngOnInit() {
    this.pokemonGraphQLService.getPokemonList(10).subscribe(pokemons => {
      this.dataSource = pokemons;
    });
  }
}