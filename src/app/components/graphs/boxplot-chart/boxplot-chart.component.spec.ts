import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxplotChartComponent } from './boxplot-chart.component';

describe('BoxplotChartComponent', () => {
  let component: BoxplotChartComponent;
  let fixture: ComponentFixture<BoxplotChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxplotChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxplotChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
