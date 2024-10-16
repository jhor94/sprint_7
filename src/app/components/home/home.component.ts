import { Component, inject } from '@angular/core';
import { shipsService } from '../../services/shipsService';
import { ShipsList } from '../../interficies/ships-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  service = inject(shipsService);
  shipsList!: ShipsList;

  getServiceApi() {
    this.service.getListShips().subscribe((data: ShipsList) => {
      this.shipsList = data;
      console.log(this.shipsList)
    })

  }
}

