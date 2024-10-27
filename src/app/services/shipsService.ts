import { Injectable, inject } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ship } from '../interfaces/ships-list';

@Injectable({
  providedIn: 'root'
})
export class shipsService {
  private apiUrl = 'https://swapi.dev/api/starships/'
  httpClient = inject(HttpClient);

  constructor(private http: HttpClient) { }

  getShip(page: number = 1): Observable<Ship[]> {
    return this.http.get<{ results: Ship[] }>(`${this.apiUrl}?page=${page}`).pipe(map(response => response.results))
  }

  getShipById(id: string): Observable<Ship> {
    return this.http.get<Ship>(`${this.apiUrl}${id}/`);
  }

  //piltos

  

  getPilots( pilotsShips :string []) : Observable<any[]>{
    return forkJoin(pilotsShips.map(url => this.http.get(url)));
  }




}




