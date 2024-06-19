import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaInfoComponent } from './mapa-info.component';

describe('MapaInfoComponent', () => {
  let component: MapaInfoComponent;
  let fixture: ComponentFixture<MapaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
