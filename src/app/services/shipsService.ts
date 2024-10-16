import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ShipsList } from '../interficies/ships-list';

@Injectable({
  providedIn: 'root'
})
export class shipsService {
  httpClient = inject(HttpClient);

  constructor() { }

  getListShips(): Observable<ShipsList> {
    return this.httpClient.get<ShipsList>(`https://swapi.dev/api/starships/`);
  }
}
