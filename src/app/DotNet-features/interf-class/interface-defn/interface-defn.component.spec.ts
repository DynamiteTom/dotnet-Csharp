import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceDefnComponent } from './interface-defn.component';

describe('InterfaceDefnComponent', () => {
  let component: InterfaceDefnComponent;
  let fixture: ComponentFixture<InterfaceDefnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceDefnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceDefnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
