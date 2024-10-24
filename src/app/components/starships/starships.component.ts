import { Component, inject, Input, OnInit } from '@angular/core';
import { shipsService } from '../../services/shipsService';
import { Ship } from '../../interficies/ships-list';
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

  currentnumberPage = 1

  constructor() {

  }
  ngOnInit(): void {
    this.getListShip();
  }
  getListShip() {
    this.shipService.getShip(this.currentnumberPage).subscribe((data: Ship[]) => {
      const newShips = data.map(ship => ({
        ...ship,
        id: ship.url.split('/').slice(-2, -1)[0]
      }));
      this.shipsList = [...this.shipsList, ...newShips]
      console.log(this.shipsList)
    })
  }


  loadMoreShips() {
    this.currentnumberPage++
    this.getListShip()
  }
}
