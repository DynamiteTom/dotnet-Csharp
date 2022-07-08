import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tsconfig.JsonComponent } from './tsconfig-json.component';

describe('Tsconfig.JsonComponent', () => {
  let component: Tsconfig.JsonComponent;
  let fixture: ComponentFixture<Tsconfig.JsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tsconfig.JsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tsconfig.JsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
