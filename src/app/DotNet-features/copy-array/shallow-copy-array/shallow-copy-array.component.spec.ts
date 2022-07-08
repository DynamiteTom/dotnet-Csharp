import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShallowCopyArrayComponent } from './shallow-copy-array.component';

describe('ShallowCopyArrayComponent', () => {
  let component: ShallowCopyArrayComponent;
  let fixture: ComponentFixture<ShallowCopyArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShallowCopyArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShallowCopyArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
