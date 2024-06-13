import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionmemosComponent } from './creacionmemos.component';

describe('CreacionmemosComponent', () => {
  let component: CreacionmemosComponent;
  let fixture: ComponentFixture<CreacionmemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionmemosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionmemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
