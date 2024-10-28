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
  imgUrl!: string
  ship!: Ship

ngOnInit(): void {
  this.loadPilots(this.pilotsShips);
}



loadPilots(pilotsShips: string[]) {
  console.log('entran las urls', pilotsShips)
  this.shipService.getPilots(pilotsShips).subscribe((data: any[]) => {
    this.pilots = data.map((pilot)=>{
      const pilotId = pilot.url.split('/').slice(-2,-1)[0];
      return{
        name:pilot.name,
        imgUrl: `https://starwars-visualguide.com/assets/img/characters/${pilotId}.jpg`,
      }
    })
    console.log(this.pilots)
    })
  }



  }



