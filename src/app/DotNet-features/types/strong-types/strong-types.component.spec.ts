import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongTypesComponent } from './strong-types.component';

describe('StrongTypesComponent', () => {
  let component: StrongTypesComponent;
  let fixture: ComponentFixture<StrongTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrongTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrongTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
