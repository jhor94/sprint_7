import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsDetailsComponent } from './starships-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { shipsService } from '../../services/shipsService';

describe('StarshipsDetailsComponent', () => {
  let component: StarshipsDetailsComponent;
  let fixture: ComponentFixture<StarshipsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarshipsDetailsComponent,RouterTestingModule, HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => '123'}),
          }
        },
        shipsService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set imgError to true when onImgError is called', () => {
    component.onImgError(); // Llama al método onImgError
    expect(component.imgError).toBeTrue(); // Verifica que imgError sea verdadero
  });
});
