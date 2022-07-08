import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestructuringTypesComponent } from './destructuring-types.component';

describe('DestructuringTypesComponent', () => {
  let component: DestructuringTypesComponent;
  let fixture: ComponentFixture<DestructuringTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestructuringTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestructuringTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
