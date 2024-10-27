import { Component, inject, OnInit } from '@angular/core';
import { Ship } from '../../interfaces/ships-list';
import { shipsService } from '../../services/shipsService';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PilotsComponent } from "./pilots/pilots/pilots.component";


@Component({
  selector: 'app-starships-details',
  standalone: true,
  imports: [CommonModule, PilotsComponent],
  templateUrl: './starships-details.component.html',
  styleUrl: './starships-details.component.scss'
})
export class StarshipsDetailsComponent implements OnInit {
shipService = inject(shipsService);
ship!:Ship


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
    console.log(ship)
    });
  }
}
