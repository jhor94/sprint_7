import { Component, inject, OnInit } from '@angular/core';
import { Ship } from '../../interfaces/ships-list';
import { shipsService } from '../../services/shipsService';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PilotsComponent } from "./pilots/pilots/pilots.component";
import { FilmComponent } from "./films/film/film.component";


@Component({
  selector: 'app-starships-details',
  standalone: true,
  imports: [CommonModule, PilotsComponent, FilmComponent],
  templateUrl: './starships-details.component.html',
  styleUrl: './starships-details.component.scss'
})
export class StarshipsDetailsComponent implements OnInit {
shipService = inject(shipsService);
ship:Ship = {} as Ship
imgUrl!: string;
imgError:boolean = false


constructor(private route: ActivatedRoute){

}
ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id') // con snapshot accedo a la URL
  if(id){
  this.getListShipId(id)
  }
  
}

getListShipId(id:string) {
  this.shipService.getShipById(id).subscribe((ship: Ship) => {
    this.ship = ship
    this.imgUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    console.log("aqui entra la imagen",this.imgUrl)
    });
  }
  
  onImgError(): void {
    this.imgError = true;
  }
}
