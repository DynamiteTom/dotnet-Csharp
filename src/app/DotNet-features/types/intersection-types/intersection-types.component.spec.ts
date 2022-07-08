import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersectionTypesComponent } from './intersection-types.component';

describe('IntersectionTypesComponent', () => {
  let component: IntersectionTypesComponent;
  let fixture: ComponentFixture<IntersectionTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntersectionTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersectionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
