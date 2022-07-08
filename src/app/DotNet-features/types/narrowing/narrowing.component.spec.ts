import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrowingComponent } from './narrowing.component';

describe('NarrowingComponent', () => {
  let component: NarrowingComponent;
  let fixture: ComponentFixture<NarrowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarrowingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarrowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
