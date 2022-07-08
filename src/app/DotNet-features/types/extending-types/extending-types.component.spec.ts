import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendingTypesComponent } from './extending-types.component';

describe('ExtendingTypesComponent', () => {
  let component: ExtendingTypesComponent;
  let fixture: ComponentFixture<ExtendingTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendingTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendingTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
