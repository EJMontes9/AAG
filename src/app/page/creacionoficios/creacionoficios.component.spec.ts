import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionoficiosComponent } from './creacionoficios.component';

describe('CreacionoficiosComponent', () => {
  let component: CreacionoficiosComponent;
  let fixture: ComponentFixture<CreacionoficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionoficiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionoficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
