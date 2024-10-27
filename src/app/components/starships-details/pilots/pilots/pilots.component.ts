import { Component, inject, Input, OnInit } from '@angular/core';
import { shipsService } from '../../../../services/shipsService';
import { Ship } from '../../../../interfaces/ships-list';

@Component({
  selector: 'app-pilots',
  standalone: true,
  imports: [],
  templateUrl: './pilots.component.html',
  styleUrl: './pilots.component.scss'
})
export class PilotsComponent implements OnInit{

  shipService = inject(shipsService)
  @Input() pilotsShips :Array<string> = []
  pilots: any[]= []
  noPilots: string = ""
  currentnumberPage = 1

ngOnInit(): void {
  this.loadPilots(this.pilotsShips);
}

loadPilots(pilotsShips: string[]) {
  console.log('entran las urls', pilotsShips)
  this.shipService.getPilots(pilotsShips).subscribe((data: any[]) => {
    this.pilots = data;
    console.log(this.pilots)
    })
  }

  }



