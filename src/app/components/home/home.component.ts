import { Component, inject } from '@angular/core';
import { StarshipsComponent } from '../starships/starships.component';
import { shipsService } from '../../services/shipsService';
import { Ship } from '../../interfaces/ships-list';
import { RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarshipsComponent, RouterModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  shipService = inject(shipsService);
  shipsList: Ship[] = [];
  isLoading:boolean = false

  currentnumber= 0
routerLink: any;

  ngOnInit(): void {
    this.getServiceApi();
  }
  getServiceApi() {
    this.isLoading = true
    this.shipService.getShip().subscribe((data: Ship[]) => {
      this.shipsList = data;
      this.isLoading= false
      console.log(this.shipsList)
    })

  }
 
}

