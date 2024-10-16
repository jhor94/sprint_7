import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ship } from '../interficies/ships-list';

@Injectable({
  providedIn: 'root'
})
export class shipsService {
  httpClient = inject(HttpClient);

  constructor() { }

  getShip(): Observable<Ship[]> {
    return this.httpClient.get<{results: Ship[]}>(`https://swapi.dev/api/starships/`).pipe(
      map((response: { results: Ship[]; }) => response.results)
    );
  }
}
