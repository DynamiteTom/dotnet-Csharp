import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsMenuComponent } from './ts-menu.component';

describe('TsMenuComponent', () => {
  let component: TsMenuComponent;
  let fixture: ComponentFixture<TsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
