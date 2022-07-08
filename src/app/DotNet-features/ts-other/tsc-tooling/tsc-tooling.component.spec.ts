import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TscToolingComponent } from './tsc-tooling.component';

describe('TscToolingComponent', () => {
  let component: TscToolingComponent;
  let fixture: ComponentFixture<TscToolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TscToolingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TscToolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
