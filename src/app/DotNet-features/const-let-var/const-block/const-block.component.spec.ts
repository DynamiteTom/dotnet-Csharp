import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstBlockComponent } from './const-block.component';

describe('ConstBlockComponent', () => {
  let component: ConstBlockComponent;
  let fixture: ComponentFixture<ConstBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
