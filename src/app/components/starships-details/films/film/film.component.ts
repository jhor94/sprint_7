import { Component, inject, Input, OnInit } from '@angular/core';
import { shipsService } from '../../../../services/shipsService';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [],
  templateUrl: './film.component.html',
  styleUrl: './film.component.scss'
})
export class FilmComponent implements OnInit {
  shipService = inject(shipsService)
  @Input() filmsShips: Array<string> = []
  films: any[]= []
  noFilms: string = ""
  imgUrl!: string

  ngOnInit(): void {
    this.loadFilms(this.filmsShips)

  }

  loadFilms(filmsShips: string[]) {
    console.log('entran las urls', filmsShips)
    this.shipService.getFilms(filmsShips).subscribe((data: any[]) => {
      this.films = data.map((film)=>{
        const filmId = film.url.split('/').slice(-2,-1)[0];
        return{
          title:film.title,
          episode:film.episode_id,
          imgUrl: `https://starwars-visualguide.com/assets/img/films/${filmId}.jpg`,
        }
      })
      console.log(this.films)
      })
    }

}
