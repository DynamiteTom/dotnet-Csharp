import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadDotsComponent } from './spread-dots.component';

describe('SpreadDotsComponent', () => {
  let component: SpreadDotsComponent;
  let fixture: ComponentFixture<SpreadDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpreadDotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
