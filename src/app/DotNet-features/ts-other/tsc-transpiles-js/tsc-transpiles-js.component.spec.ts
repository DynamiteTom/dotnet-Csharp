import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TscTranspilesJsComponent } from './tsc-transpiles-js.component';

describe('TscTranspilesJsComponent', () => {
  let component: TscTranspilesJsComponent;
  let fixture: ComponentFixture<TscTranspilesJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TscTranspilesJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TscTranspilesJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
