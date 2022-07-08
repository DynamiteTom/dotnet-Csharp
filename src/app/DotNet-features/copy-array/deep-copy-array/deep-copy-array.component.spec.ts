import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepCopyArrayComponent } from './deep-copy-array.component';

describe('DeepCopyArrayComponent', () => {
  let component: DeepCopyArrayComponent;
  let fixture: ComponentFixture<DeepCopyArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepCopyArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepCopyArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
