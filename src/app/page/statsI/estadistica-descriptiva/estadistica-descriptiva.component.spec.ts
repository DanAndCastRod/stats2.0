import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaDescriptivaComponent } from './estadistica-descriptiva.component';

describe('EstadisticaDescriptivaComponent', () => {
  let component: EstadisticaDescriptivaComponent;
  let fixture: ComponentFixture<EstadisticaDescriptivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstadisticaDescriptivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticaDescriptivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
