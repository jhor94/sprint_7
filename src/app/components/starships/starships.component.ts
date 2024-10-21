import { Component, inject, Input, OnInit } from '@angular/core';
import { shipsService } from '../../services/shipsService';
import { Ship } from '../../interficies/ships-list';

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss'
})
export class StarshipsComponent implements  OnInit{

  shipService = inject(shipsService);
  shipsList: Ship[] = [];

  currentnumber= 0



  ngOnInit(): void {
    this.getListShip();
  }
  getListShip() {
    this.shipService.getShip().subscribe((data: Ship[]) => {
      this.shipsList = data;
      console.log(this.shipsList)
    })

  }
}
