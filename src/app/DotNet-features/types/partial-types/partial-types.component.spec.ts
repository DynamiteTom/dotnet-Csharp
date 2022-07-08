import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialTypesComponent } from './partial-types.component';

describe('PartialTypesComponent', () => {
  let component: PartialTypesComponent;
  let fixture: ComponentFixture<PartialTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
