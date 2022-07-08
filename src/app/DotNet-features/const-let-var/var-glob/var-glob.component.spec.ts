import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarGlobComponent } from './var-glob.component';

describe('VarGlobComponent', () => {
  let component: VarGlobComponent;
  let fixture: ComponentFixture<VarGlobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarGlobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarGlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
