import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaussianDispersionChartComponent } from './gaussian-dispersion-chart.component';

describe('GaussianDispersionChartComponent', () => {
  let component: GaussianDispersionChartComponent;
  let fixture: ComponentFixture<GaussianDispersionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GaussianDispersionChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaussianDispersionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
