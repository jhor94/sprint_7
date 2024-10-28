import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarshipsComponent } from './starships.component';
import {of} from 'rxjs';
import { shipsService } from '../../services/shipsService';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

describe('StarshipsComponent', () => {
  let component: StarshipsComponent;
  let fixture: ComponentFixture<StarshipsComponent>;
  let mockShipService: jasmine.SpyObj<shipsService>;

  beforeEach(async () => {
    mockShipService = jasmine.createSpyObj('shipsService', ['getShip'])
    await TestBed.configureTestingModule({
      imports: [StarshipsComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have shipsList as an array', () => {
    expect(Array.isArray(component.shipsList)).toBe(true);
  });
  it('should increment currentnumberPage when loadMoreShips', () => {
    const iniPageNumber = component.currentnumberPage

    component.loadMoreShips();
    expect(component.currentnumberPage).toBe(iniPageNumber + 1)
  });

  it('should call getListShip on ngOnInit', () => {
    spyOn(component,'getListShip')

    component.ngOnInit();
    expect(component.getListShip).toHaveBeenCalled()
  });
});
