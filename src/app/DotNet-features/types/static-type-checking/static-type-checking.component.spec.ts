import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticTypeCheckingComponent } from './static-type-checking.component';

describe('StaticTypeCheckingComponent', () => {
  let component: StaticTypeCheckingComponent;
  let fixture: ComponentFixture<StaticTypeCheckingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticTypeCheckingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticTypeCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
