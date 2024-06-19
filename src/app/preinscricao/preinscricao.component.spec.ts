import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreinscricaoComponent } from './preinscricao.component';

describe('PreinscricaoComponent', () => {
  let component: PreinscricaoComponent;
  let fixture: ComponentFixture<PreinscricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreinscricaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreinscricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
