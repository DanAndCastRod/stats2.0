import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesProbabilidadComponent } from './funciones-probabilidad.component';

describe('FuncionesProbabilidadComponent', () => {
  let component: FuncionesProbabilidadComponent;
  let fixture: ComponentFixture<FuncionesProbabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuncionesProbabilidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionesProbabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
