import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsIComponent } from './stats-i.component';

describe('StatsIComponent', () => {
  let component: StatsIComponent;
  let fixture: ComponentFixture<StatsIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
