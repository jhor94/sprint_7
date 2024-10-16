import { Component, inject } from '@angular/core';
import { StarshipsComponent } from '../starships/starships.component';
import { shipsService } from '../../services/shipsService';
import { Ship } from '../../interficies/ships-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarshipsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  shipService = inject(shipsService);
  shipsList: Ship[] = [];
  isLoading:boolean = false

  currentnumber= 0

  ngOnInit(): void {
    this.getListShip();
  }
  getListShip() {
    this.isLoading = true
    this.shipService.getShip().subscribe((data: Ship[]) => {
      this.shipsList = data;
      this.isLoading= false
      console.log(this.shipsList)
    })

  }
 
}

