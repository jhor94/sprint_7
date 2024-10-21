import { Component, inject, Input, OnInit } from '@angular/core';
import { shipsService } from '../../services/shipsService';
import { Ship } from '../../interficies/ships-list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarshipsDetailsComponent } from '../starships-details/starships-details.component';

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [RouterModule,CommonModule, StarshipsDetailsComponent],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss'
})
export class StarshipsComponent implements  OnInit{

  shipService = inject(shipsService);
  shipsList: Ship[] = [];

  currentnumber= 0

constructor(){

}
  ngOnInit(): void {
    this.getListShip();
  }
  getListShip() {
    this.shipService.getShip().subscribe((data: Ship[]) => {
      this.shipsList = data.map(ship => ({
        ...ship,
        id: ship.url.split('/').slice(-2,-1)[0]
      }));
      console.log(this.shipsList)
    })
  }
  /*goDetail(name:string){
    this.router.navigate(['/starship',name])


  }*/
}
