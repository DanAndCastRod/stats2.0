import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoriaProbabilidadComponent } from './teoria-probabilidad.component';

describe('TeoriaProbabilidadComponent', () => {
  let component: TeoriaProbabilidadComponent;
  let fixture: ComponentFixture<TeoriaProbabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeoriaProbabilidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeoriaProbabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
