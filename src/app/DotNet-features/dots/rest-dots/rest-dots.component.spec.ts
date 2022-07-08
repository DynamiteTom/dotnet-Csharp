import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestDotsComponent } from './rest-dots.component';

describe('RestDotsComponent', () => {
  let component: RestDotsComponent;
  let fixture: ComponentFixture<RestDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestDotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
