import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBiAppComponent } from './power-bi-app.component';

describe('PowerBiAppComponent', () => {
  let component: PowerBiAppComponent;
  let fixture: ComponentFixture<PowerBiAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerBiAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerBiAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
