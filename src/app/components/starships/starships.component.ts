import { Component, inject, OnInit } from '@angular/core';
import { shipsService } from '../../services/shipsService';
import { Ship } from '../../interfaces/ships-list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarshipsDetailsComponent } from '../starships-details/starships-details.component';


@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [RouterModule, CommonModule, StarshipsDetailsComponent],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss'
})
export class StarshipsComponent implements OnInit {

  shipService = inject(shipsService);
  shipsList: Ship[] = [];
  pilots : any[]= []

  currentnumberPage = 1
  allShipsLoad = false
  readonly maxPages = 4

  constructor() {

  }
  ngOnInit(): void {
    this.getListShip();
  }
  getListShip() {
    this.shipService.getShip(this.currentnumberPage).subscribe({
      next:(data: Ship[]) => {
      const newShips = data.map(ship => ({
        ...ship,
        id: ship.url.split('/').slice(-2, -1)[0],
        imgUrl: `https://starwars-visualguide.com/assets/img/starships/${ship.id}.jpg`,
      }));
      if(newShips.length === 0){
        this.allShipsLoad = true
        console.log("entra aqui")
      }else{
      this.shipsList = [...this.shipsList, ...newShips]
      console.log(this.shipsList)
      console.log(this.currentnumberPage,"numero de paginas")
      }
    },
    error: (error) => {
      if (error.status === 404) {
        this.allShipsLoad = true;
        console.log("No hay más páginas disponibles");
      } else {
        console.error("Error al cargar naves:", error);
      }
    }
    });
  }


  loadMoreShips() {
    if(this.currentnumberPage < this.maxPages){
    this.currentnumberPage++
    this.getListShip()
    console.log(this.currentnumberPage)
    }else {
      this.allShipsLoad = true
      console.log("se cargaron todas las naves")
    }
  }

  onScroll(event: any) {
    const element = event.target;
    if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
      this.loadMoreShips();
    }
  }
}
