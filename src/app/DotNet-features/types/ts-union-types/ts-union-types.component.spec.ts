import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsUnionTypesComponent } from './ts-union-types.component';

describe('TsUnionTypesComponent', () => {
  let component: TsUnionTypesComponent;
  let fixture: ComponentFixture<TsUnionTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsUnionTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsUnionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
